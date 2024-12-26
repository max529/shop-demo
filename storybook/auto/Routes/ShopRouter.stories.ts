import type { Meta, Story } from '@aventusjs/storybook'
import Template from './ShopRouter_.mdx'

const meta: Meta = {
	title: 'Routes/ShopRouter',
	parameters: {
        docs: {
            page: Template,
            description: {
                component: ``
            },
        }
    },
    
    
    aventus: {
  "kind": "class",
  "name": "ShopRouter",
  "namespace": "Shop.Routes",
  "extends": {
    "kind": "simple",
    "name": "Aventus.HttpRouter"
  },
  "methods": [
    {
      "name": "defineOptions",
      "accessibility": "protected",
      "modifiers": [
        "override"
      ],
      "parameters": [
        {
          "name": "options",
          "type": {
            "kind": "simple",
            "name": "Aventus.HttpRouterOptions"
          }
        }
      ],
      "return": {
        "type": {
          "kind": "simple",
          "name": "Aventus.HttpRouterOptions"
        }
      }
    }
  ]
},
}

export default meta;

export const DefaultStory: Story = {}
