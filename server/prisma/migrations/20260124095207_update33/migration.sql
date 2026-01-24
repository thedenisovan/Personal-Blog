/*
  Warnings:

  - The `likedById` column on the `Likes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `postId` to the `Likes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Likes" DROP CONSTRAINT "Likes_likedById_fkey";

-- AlterTable
ALTER TABLE "Likes" ADD COLUMN     "postId" INTEGER NOT NULL,
DROP COLUMN "likedById",
ADD COLUMN     "likedById" INTEGER;

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_likedById_fkey" FOREIGN KEY ("likedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
