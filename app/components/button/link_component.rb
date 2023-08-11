# frozen_string_literal: true

class Button::LinkComponent < ViewComponent::Base
  def initialize(label: 'Link', url: "#", link_class: nil)
    @label = label
    @url = url
    @link_class = link_class
  end
end
