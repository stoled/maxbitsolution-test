import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CoctailCard from '@/components/CoctailList.vue'

describe('CoctailCard', () => {
  it('renders properly', () => {
    const wrapper = mount(CoctailCard)
    expect(wrapper.text()).toContain('')
  })
})
