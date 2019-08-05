//he we import Mongo from meteor
/*
    by exporting out or Mongo stuff we give the front end and back end access to our database
*/
import {Mongo} from "meteor/mongo";

//here we are exporting a new Mongo collections object called Feedback 
//to be imported and used somewhere else
export const Feedback = new Mongo.Collection("Feedback");