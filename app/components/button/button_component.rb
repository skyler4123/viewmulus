# frozen_string_literal: true

class Button::ButtonComponent < ViewComponent::Base
  renders_one :header
  renders_one :footer
  renders_one :modal
  renders_one :popover
  renders_one :indicator
  def initialize(label: 'Button')
    @label = label
  end
end
