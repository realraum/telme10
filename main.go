//
//  telme10
//
// Copyright (c) 2016 Christian Pointner <equinox@realraum.at>
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of telgo nor the names of its contributors may be
//       used to endorse or promote products derived from this software without
//       specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//

package main

import (
	"fmt"
	"os"
	"time"

	"github.com/coreos/go-systemd/activation"
	"github.com/spreadspace/telgo"
)

func wait(length time.Duration, cancel <-chan bool) bool {
	t := time.NewTimer(length)
	defer t.Stop()
	select {
	case <-t.C:
		return false
	case <-cancel:
		return true
	}
}

func printLogo(c *telgo.Client) {
	for _, line := range logoBW72 {
		c.Sayln(" " + line)
	}
}

type Greeter struct {
}

func (g Greeter) Exec(c *telgo.Client, args []string) bool {
	c.Sayln("")
	c.Sayln("")
	printLogo(c)
	c.Sayln("")
	c.Sayln("       Hello!")
	c.Sayln("")

	if wait(1*time.Second, c.Cancel) {
		return true
	}
	c.Sayln("     Did you know: realraum will be celebrating its 10th birthday")
	c.Sayln("     on the 18th of March 2017?")
	c.Sayln("")

	if wait(1*time.Second, c.Cancel) {
		return true
	}
	c.Sayln("     you should come by!")
	c.Sayln("")

	if wait(3*time.Second, c.Cancel) {
		return true
	}
	c.Sayln("     fun fun fun!")
	c.Sayln("")

	if wait(3*time.Second, c.Cancel) {
		return true
	}
	c.Sayln("     come to the party ... we mean it!")
	c.Sayln("")
	c.Sayln("     you have now 10s to decide:")

	c.Say("       deciding ...   0.0%%\r")
DECISION:
	for i := uint(0); i < 100; i++ {
		select {
		case <-c.Cancel:
			break DECISION
		default:
		}
		time.Sleep(100 * time.Millisecond)
		c.Say("      deciding ... %5.1f%%\r", (float64(i)/float64(100))*100.0)
	}
	c.Sayln("      deciding ... 100.0%% ... done.")
	c.Sayln("")

	c.Prompt = "     are you coming?  "
	return false
}

func answer(c *telgo.Client, args []string) bool {
	if len(args) > 1 {
		c.Sayln("       yes or no?")
		return false
	}

	switch args[0] {
	case "y":
		fallthrough
	case "yes":
		c.Sayln("")
		c.Sayln("     Great! We'll see you at the party then.")
	case "n":
		fallthrough
	case "no":
		c.Sayln("")
		c.Sayln("     Sorry to hear! You're missing out on a great experience.")
	default:
		c.Sayln("       yes or no?")
		return false
	}

	c.Sayln("")
	c.Sayln("         https://github.com/realraum/telme10")
	c.Sayln("")
	time.Sleep(1 * time.Second)
	return true
}

func main() {
	cmdlist := make(telgo.CmdList)

	listeners, err := activation.Listeners(true)
	if err != nil {
	}

	fmt.Printf("got %d sockets from systemd\n", len(listeners))
	var s *telgo.Server
	if len(listeners) == 0 {
		if len(os.Args) < 2 {
			fmt.Println("please specify a address to listen on")
			os.Exit(2)
		}
		if s, err = telgo.NewServer(os.Args[1], "", cmdlist, nil); err != nil {
			fmt.Println("failed to initialize the server:", err)
			os.Exit(1)
		}
	} else {
		if len(listeners) > 1 {
			fmt.Println("warning got more than one socket from systemd, only using the first", err)
		}
		if s, err = telgo.NewServerFromListener(listeners[0], "", cmdlist, nil); err != nil {
			fmt.Println("failed to initialize the server:", err)
			os.Exit(1)
		}
	}
	if err = s.Run(Greeter{}, answer); err != nil {
		fmt.Println("telnet server returned:", err)
	}
}
