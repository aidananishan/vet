import { v4 as uuid } from 'uuid';

export const moods = ["😄", "🤣", "😞", "🤯"];

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: uuid(),
    title: "Note 1",
    mood: "😄",
    img:
      "https://i.pinimg.com/originals/39/fe/a7/39fea76d74a1b9c48d0c455f7d9ec27b.png"
  },
  {
    id: uuid(),
    title: "Note 2",
    mood: "😞",
    img:
      "https://i.pinimg.com/originals/e0/21/cc/e021cccd68247bc9a6b64ac53c07d7a4.jpg"
  },
  {
    id: uuid(),
    title: "Note 2.1",
    mood: "😞",
    img:
      "https://i.pinimg.com/originals/e0/21/cc/e021cccd68247bc9a6b64ac53c07d7a4.jpg"
  },
  {
    id: uuid(),
    title: "Note 3",
    mood: "🤣",
    img:
      "https://i.pinimg.com/originals/e0/21/cc/e021cccd68247bc9a6b64ac53c07d7a4.jpg"
  },
  {
    id: uuid(),
    title: "Note 4",
    mood: "🤯",
    img:
      "https://i.pinimg.com/originals/39/fe/a7/39fea76d74a1b9c48d0c455f7d9ec27b.png"
  }
]