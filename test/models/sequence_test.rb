require 'test_helper'

class SequenceTest < ActiveSupport::TestCase
  def setup
    @user = users(:michael)
    @sequence = @user.sequences.build(description: "a sequence")
  end

  test "should be valid" do
    assert @sequence.valid?
  end

  test "user id should be present" do
    @sequence.user_id = nil
    assert_not @sequence.valid?
  end

  test "description should be present" do
    @sequence.description = "   "
    assert_not @sequence.valid?
  end

  test "description should be at most 140 characters" do
    @sequence.description = "a" * 141
    assert_not @sequence.valid?
  end

  test "order should be most recent first" do
    assert_equal sequences(:most_recent), Sequence.first
  end
end
