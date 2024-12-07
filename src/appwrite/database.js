import { Client, Databases, ID, Query } from "appwrite";
import { conf } from "../conf/conf";
export class DatabaseService {
  client = new Client();
  database;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.database = new Databases(this.client);
  }
  async createPost( { title, content, featuredImage,slug, userId, status }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          userId,
          status,
        }
      );
    } catch (error) {
      console.log("createPost :: error :: ", error);
      return false
    }
  }
  async updatePost(slug, { title, content, featuredImage,  status }) {
    try {
      return await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        
        }
      );
    } catch (error) {
      console.log("updatePost :: error :: ", error);
      return false
    }
  }
  async deletePost(slug) {
    try {
       await this.database.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true
    } catch (error) {
      console.log("deletePost :: error :: ", error);
        return false
    }
  }
  async getPost(slug) {
    try {
      return await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("getPost :: error :: ", error);
      return false
    }
  }
  async getPosts(){
    try {
        return await this.database.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            [Query.equal("status", "active")]
        )
    } catch (error) {
        console.log("getPosts :: error :: ",error);
        return false
    }
  }
  async getMyPosts(userId){
    try {
        return await this.database.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            [Query.equal("userId", [userId])]
        )
    } catch (error) {
        console.log("getPosts :: error :: ",error);
        return false
    }
  }
}
const databaseService = new DatabaseService();
export default databaseService;
