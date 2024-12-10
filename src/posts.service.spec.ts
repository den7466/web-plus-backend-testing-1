import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const posts: Post[] = [];
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Some pre-existing post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    posts.push(
      {
        ...post,
        id: '1',
        date: new Date().toISOString(),
      }
    );
    expect(postsService.find('1')?.text).toEqual(posts[0].text);
  });

  it('should find a post', () => {
    // реализуйте тест-кейс
  });
});