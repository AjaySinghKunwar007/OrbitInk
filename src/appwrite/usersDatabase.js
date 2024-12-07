import { Client, Databases, ID, Query } from "appwrite";
import { conf } from "../conf/conf";
export class UsersDatabaseService {
  client = new Client();
  database;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.database = new Databases(this.client);
  }
  async createUser({ userName, bio, profileImage, userId,email, }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCollectionId,
        userId,
        {
          userName,
          bio,
          profileImage,
          email
          
        }
      );
    } catch (error) {
      console.log("createPost :: error :: ", error);
      return false;
    }
  }
  async updateUser(userId, { userName, bio, profileImage,firstName,lastName,email }) {
    try {
      return await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCollectionId,
        userId,
        {
          userName,
          bio,
          profileImage,
          firstName,
          lastName,
          email
          
        }
      );
    } catch (error) {
      console.log("updatePost :: error :: ", error);
      return false;
    }
  }



//   async deleteUser(slug) {
//     try {
//       await this.database.deleteDocument(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         slug
//       );
//       return true;
//     } catch (error) {
//       console.log("deletePost :: error :: ", error);
//       return false;
//     }
//   }



  async getUser(userId) {
    try {
      return await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCollectionId,
        userId
      );
    } catch (error) {
      console.log("getPost :: error :: ", error);
      return false;
    }
  }


//   async getUsers() {
//     try {
//       return await this.database.listDocuments(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         [Query.equal("status", "active")]
//       );
//     } catch (error) {
//       console.log("getPosts :: error :: ", error);
//       return false;
//     }
//   }
}
const usersDatabaseService = new UsersDatabaseService();
export default usersDatabaseService;
