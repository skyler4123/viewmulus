# frozen_string_literal: true

class DemoComponent < ViewComponent::Base
  def initialize(demo:)
    @demo = demo
  end

end
