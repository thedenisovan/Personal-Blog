/*
  Warnings:

  - You are about to drop the `_Likes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Likes" DROP CONSTRAINT "_Likes_A_fkey";

-- DropForeignKey
ALTER TABLE "_Likes" DROP CONSTRAINT "_Likes_B_fkey";

-- DropTable
DROP TABLE "_Likes";

-- CreateTable
CREATE TABLE "Likes" (
    "id" SERIAL NOT NULL,
    "likedById" INTEGER NOT NULL,

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_likedById_fkey" FOREIGN KEY ("likedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
