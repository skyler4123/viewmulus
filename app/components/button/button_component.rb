# frozen_string_literal: true

class Button::ButtonComponent < ViewComponent::Base
  renders_one :header
  renders_one :footer
  renders_one :click
  renders_one :hover
  renders_one :modal
  def initialize(
      label: 'Enter',
      component_class: "inline group",
      label_class: "inline-block list-none cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-sm text-md text-center p-1 active:scale-95 duration-100"
    )
    @label = label
    @compoent_class = component_class
    @label_class = label_class
  end
end
