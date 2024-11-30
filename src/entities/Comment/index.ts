// ui
export { CommentList } from './ui/CommentList/CommentList';

//types
export type { I_Comment } from './model/types/comment';

// services
export { commentService, CommentService } from './services/comment.service';

// hooks
export { useCommentsForProduct } from './api/hooks/useComments';

// api
export { deleteCommentThunk } from './api/deleteCommentThunk';
