import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Header } from '.'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'frame/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  styles: ['./components/App.css'],
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Standard = Template.bind({})
Standard.args = {
  pages: [
    'home',
    'appstore',
    'datacatalog',
    'digitaltwins',
    'semantichub',
    'developerhub',
  ],
  userPages: [
    'account',
    'notifications',
    'organization',
    'partner_network',
    'user_management',
    'logout',
  ],
}
