import { storiesOf } from '@storybook/vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

storiesOf('Welcome', module)
  .add('hello', () => ({
    template: '<div>Hello</div>'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  })){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
