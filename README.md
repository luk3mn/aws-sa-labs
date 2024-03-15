# **Creating a Static Website for the Café**

## **Scenario**

Frank and Martha are a husband-and-wife team who own and operate a small café business that sells desserts and coffee. Their daughter, Sofía, and their other employee, Nikhil—who is a secondary school student—also work at the café. The café has a single location in a large city.

The café currently doesn’t have a marketing strategy. They mostly gain new customers when someone walks by, notices the café, and decides to try it. The café has a reputation for high-quality desserts and coffees, but their reputation is limited to people who have visited, or who have heard about them from their customers.

Sofía suggests to Frank and Martha that they should expand community awareness of what the café has to offer. The café doesn’t have a web presence yet, and it doesn’t currently use any cloud computing services. However, that situation is about to change.

![module-3-challenge-lab-cafe-static-website-architecture.png](/assets/s3-website/module-3-challenge-lab-cafe-static-website-architecture.png)

---

## **Launching a static website**

> **Creating an S3 bucket to host the static website**
> 
- We must disable **Block all public access** and enable the **ACLs enabled** option.
- Enable static website hosting on your bucket

![Untitled](/assets/s3-website/bucket-s3.png)

> **Uploading content to your S3 bucket**
> 
- Upload the project website folders to the S3 bucket.
- We can use the endpoint link to access the static website

![Untitled](/assets/s3-website/upload-s3.png)

![Untitled](/assets/s3-website/access-denied.png)

> **Creating a bucket policy to grant public read access**
> 
- Create a bucket policy that grants read-only permission to public anonymous users by using the Bucket Policy editor
- the website for the café is now publicly accessible

![Untitled](/assets/s3-website/policy-public-access.png)

![Untitled](/assets/s3-website/web-page.png)

---

> **Protecting website data**
> 
- Enabling versioning on the S3 bucket

![Untitled](/assets/s3-website/versioning.png)

## **Optimizing costs of S3 object storage**

> **Setting lifecycle policies**
> 
- Configure two rules in the website bucket's lifecycle configuration, create two separate rules:
    - In one rule, move previous versions of all source bucket objects to S3 Standard-IA after 30 days
    - In the other rule, delete previous versions of the objects after 365 days

<!-- <div style="display: inline-block; width: 300px;"> -->

![Untitled](/assets/s3-website/move.png)
![Untitled](assets/s3-website/delete.png)

<!-- </div> -->
---

## **Enhancing durability and planning for DR**

> **Enabling cross-Region replication**
> 
- In a different Region than the source bucket, create a second bucket and enable versioning on it. The second bucket will be the *destination bucket*.
- It was used the **CafeRole** for the AWS Identity and Access Management (IAM) role. This IAM role gives Amazon S3 permission to read objects from the source bucket and replicate them to the destination bucket.

> Replication 

![Untitled](/assets/s3-website/replication.png)

> CafeRole
```json
    {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "s3:ListBucket",
                "s3:ReplicateObject",
                "s3:ReplicateDelete",
                "s3:ReplicateTags",
                "s3:Get*"
            ],
            "Resource": [
                "*"
            ],
            "Effect": "Allow"
        }
    ]
}
```