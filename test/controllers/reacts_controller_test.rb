require 'test_helper'

class ReactsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get reacts_index_url
    assert_response :success
  end

  test "should get show" do
    get reacts_show_url
    assert_response :success
  end

end
