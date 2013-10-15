class Post < ActiveRecord::Base

  def self.search(search)
    search_condition = "%" + search + "%"
    find(:all, :conditions => ['title LIKE ? OR body LIKE ?', search_condition, search_condition])
  end

end
