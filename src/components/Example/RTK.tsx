import { useLazyGetPostsQuery } from '@/api/baseQueries/postsApi/getPosts';
import displaySuccessMessage from '@/utils/displaySuccessMessage';
import { Button } from '@mui/material';
import React from 'react';

const RTK = () => {
  const [fetchPosts, fetchPostsProps] = useLazyGetPostsQuery();

  return (
    <div>
      <div className="space-y-2">
        <div className="font-semibold text-4xl pb-4">RTK Query</div>
        <div>
          <Button
            variant="contained"
            className="bg-[#1976d2]"
            disabled={fetchPostsProps.isLoading}
            onClick={async () =>
              fetchPosts()
                .unwrap()
                .then(() => displaySuccessMessage('Post fetched successfully'))
                .catch((err) => {})
            }
          >
            Fetch Data
          </Button>
        </div>
        <div className="flex flex-col gap-y-2">
          {fetchPostsProps.data?.slice(0, 8).map((post) => (
            <div key={post.id} className="font-medium">
              {post.id}. {post.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RTK;
