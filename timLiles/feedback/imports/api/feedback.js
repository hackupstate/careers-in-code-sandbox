import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
    Meteor.publish("feedback", function
    feedbackPublication() {
        if (this.userID) {
            return Feedback.find();
        } else {
            return null;
        }
    });
}

Meteor.methods({
    "feedback.update"(feedbackID,
        updateFeedback) {
            if (this.userId) {
                Feedback.update(feedbackID, {
                    $set: { message: updatedFeedback}
                });
            } else {
                throw new Meteor.Error
                ("not-authorized. Goodbye :)")
            }
        }
});

export const Feedback = new Mongo.Collection("Feedback");
