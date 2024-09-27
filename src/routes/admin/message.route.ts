import express from 'express';
import { getMessages, createMessage, deleteMessage, updateMessage } from '../../controller/admin/message.controller';
import { authenticate } from '../../middleware/auth.middleware';

const router = express.Router();

router.post('/create-message', authenticate(['admin']), createMessage);

router.get('/', getMessages);
router.delete('/messages/:id', authenticate(['admin']), deleteMessage);
router.put('/messages/:id', authenticate(['admin']), updateMessage);

export default router;
