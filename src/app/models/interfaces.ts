
export enum Party {
    sender, reciever
}

export enum Relation {
    so = "Significant Other", 
    ex = "Ex", 
    boss = "Boss", 
    coworker = "Co-worker", 
    mother = "Mother", 
    father = "Father", 
    sibling = "Sibling", // Etc.
}

export enum Gender {
    female = "Female", 
    male = "Male", 
    transgender = "Transgender", 
    nonBinary = "Non binary", 
    preferNotToSay = "Prefer Not to Say"
}

export interface Text {
    message: string;
    party: Party;
}

export interface Conversation {
    title?: string;
    texts: Text[];
    likes: number;
    context?: ContextDetails;
    proposedText: string;
    adviceRecieved?: AdviceDetails;
}

export interface AdviceDetails {
    send: number;
    dontSend: number;
}

export interface ContextDetails {
    nickName?: string;
    relation?: Relation;
    age?: number;
    gender?: Gender;
    additionalDetails?: string;
}