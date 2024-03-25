import React, { useState } from 'react';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ImageComponent = ({ imageUrl, postId }) => {
  const [votes, setVotes] = useState(0);

  const handleVote = async () => {
    setVotes(votes + 1);

    // Update the vote count in the database
    await prisma.post.update({
      where: { id: postId },
      data: { votes: { increment: 1 } },
    });
  };

  return (
    <div>
      <img src={imageUrl} alt="Image" />
      <button onClick={handleVote}>Vote</button>
      <p>{votes} votes</p>
    </div>
  );
};

export default ImageComponent;