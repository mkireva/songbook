type Message = typeof import("./src/messages/en.json")
type BgMessages = typeof import("./src/messages/bg.json")
type DeMessages = typeof import("./src/messages/de.json")
type FrMessages = typeof import("./src/messages/fr.json")

declare interface intMessages extends Message, BgMessages, DeMessages, FrMessages {}