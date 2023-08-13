# frozen_string_literal: true

class Button::ButtonComponent < ViewComponent::Base
  renders_one :header
  renders_one :footer
  renders_one :modal
  def initialize(label: 'Enter')
    @label = label
  end
end
