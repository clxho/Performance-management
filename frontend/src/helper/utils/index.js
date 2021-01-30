import {
  Message
} from 'element-ui';
export const result = (res) => {
  if (res.meta.code === 0) {
    Message.error(res.meta.msg)
  } else {
    Message.success(res.meta.msg)
  }
}