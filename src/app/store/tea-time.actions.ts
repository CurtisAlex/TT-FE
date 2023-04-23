import { createAction, props } from "@ngrx/store";
import { Conversation } from "../models/interfaces";

export const storeName = 'Tea Time';

export const addNewConversation = createAction(
    `[${storeName}] Add new conversation`,
    props<{ data: Conversation }>());

export const updateConversations = createAction(
    `[${storeName}] Update conversations`,
    props<{ data: Conversation[] }>());

export const conversationLiked = createAction(
    `[${storeName}] conversation liked`);

export const conversationDisliked = createAction(
    `[${storeName}] conversation disliked`);
    
export const updateActiveConversationId = createAction(
    `[${storeName}] Update active conversation id`,
    props<{ data: number }>());
