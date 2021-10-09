import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe('saveComment', () => {


    it('should have correct type', () => {
        const action = saveComment()

        expect(action.type).toEqual(SAVE_COMMENT)

    })

    it('should have correct payload', () => {
        const newAction = saveComment('New Comment')

        expect(newAction.payload).toEqual('New Comment')
    })
})