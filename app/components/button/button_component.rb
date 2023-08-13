# frozen_string_literal: true

class Button::ButtonComponent < ViewComponent::Base
  renders_one :header
  renders_one :footer
  renders_one :modal
  renders_one :popover
  def initialize(label: 'Button')
    @label = label
  end
end
