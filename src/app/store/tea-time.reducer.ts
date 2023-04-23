import { createReducer, on } from "@ngrx/store";
import { Conversation } from "../models/interfaces";
import { addNewConversation, conversationDisliked, conversationLiked, updateActiveConversationId, updateConversations } from "./tea-time.actions";

export interface RootState {
    conversations: Conversation[];
    activeConversationId: number;
}

export const initialState: RootState = {
    conversations: [],
    activeConversationId: 0
}

export const reducer = createReducer(
    initialState,
    on(addNewConversation, (state, { data } )=> ({
        ...state,
        conversations: [
            ...state.conversations,
            {
                title: data.title,
                texts: data.texts,
                context: data.context,
                proposedText: data.proposedText
            } as Conversation
        ]
    })),
    on(updateConversations, (state, { data } )=> ({
        ...state,
        conversations: data
    })),
    on(updateActiveConversationId, (state, { data } )=> ({
        ...state,
        activeConversationId: data
    })),
    // on(conversationLiked, state => ({
    //     ...state,
    //     conversation: {
    //         ...state.conversation,
    //         likes: state.conversation.likes++
    //     }
    // })),
    // on(conversationDisliked, state => ({
    //     ...state,
    //     conversation: {
    //         ...state.conversation,
    //         likes: state.conversation.likes--
    //     }
    // }))
)