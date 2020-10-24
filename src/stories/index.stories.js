import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MyButton from '../components/MyButton.vue'

import Score from '../components/Content/Products/Score/Score.vue'
import Header from '../components/Header/Header.vue'

export default {
  component: MyButton,
  title: 'Button'
}

export const withText = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action('clicked') }
})

export const withJSX = () => ({
  render() {
    return <MyButton onClick={linkTo('Button', 'With Some Emoji')}>With JSX</MyButton>;
  }
})

export const withSomeEmoji = () => ({
  components: { MyButton },
  template: '<my-button>😀 😎 👍 💯</my-button>'
})

export const withScore = () => ({
  components: Score,
  template: '<Score></Score>'
})

export const withHeader = () => ({
  components: Header,
  template: '<Header></Header>'
})
