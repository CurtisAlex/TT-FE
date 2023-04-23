import { createSelector } from "@ngrx/store";
import { RootState } from "./tea-time.reducer";
import { Conversation } from "../models/interfaces";

export const selectTeaTimeStore = (state: any): RootState => state.TeaTime;
export const selectConversations = createSelector(selectTeaTimeStore, (state: RootState) => state.conversations);
export const selectActiveConversationId = createSelector(selectTeaTimeStore, (state: RootState) => state.activeConversationId);

export const selectActiveConversation = createSelector(
    selectConversations, 
    selectActiveConversationId,
    (conversations: Conversation[], activeConvoId: number) => {
        // add additional checks here, i.e. if the active convo id exist in the list of convos or not
        return conversations[activeConvoId];
    });

export const selectPrevActiveConversation = createSelector(
    selectConversations, 
    selectActiveConversationId,
    (conversations: Conversation[], activeConvoId: number) => {
        // add additional checks here, i.e. if the active convo id exist in the list of convos or not
        if ((activeConvoId - 1) > 0) {
            return conversations[activeConvoId - 1];
        }
        return;
    });

export const selectNextActiveConversation = createSelector(
    selectConversations, 
    selectActiveConversationId,
    (conversations: Conversation[], activeConvoId: number) => {
        // add additional checks here, i.e. if the active convo id exist in the list of convos or not
        return conversations[activeConvoId + 1];
    });