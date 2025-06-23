import { Awaitable, ButtonInteraction, Client, ModalSubmitInteraction, SelectMenuInteraction } from "discord.js";

interface EventsExecuteOptions {
client?:Client;
};
interface ComponentsExecuteOptions {
client?:Client;
value?:string;
};

export type EventExecute = (args:any,options:EventsExecuteOptions) =>{};
export type ComponentsExecute = (args:any,options:ComponentsExecuteOptions) =>{};

interface ComponentsInteraction {
    Modal:ModalSubmitInteraction;
    SM:SelectMenuInteraction;
    Button:ButtonInteraction;
}

type Comp = keyof ComponentsInteraction

interface CompBase <T extends Comp = Comp> {
type: T;
customId:string;
execute(args:ComponentsInteraction[T],options:ComponentsExecuteOptions): Awaitable<void>
}


export type Categorys = 'Main' | 'Admin' | 'Public';