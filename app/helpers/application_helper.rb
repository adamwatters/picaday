module ApplicationHelper
  # Returns the full title on a per-page basis.
  def full_title(page_title = '')
    base_title = "Picaday"
    if page_title.empty?
      base_title
    else
      page_title + " | " + base_title
    end
  end

  def sequences_react_component(sequences, showUserInfo=true)
    tag('div', id:'root', data: {props: sequences.map{|sequence|
                                   {description: sequence.description,
                                    pictureURLs:sequence.picture_urls,
                                    userLink: url_for(sequence.user),
                                    userName: sequence.user.name,
                                    showUserInfo: showUserInfo,
                                    streak: sequence.picture_created_at_times,
                                    }
    }})
  end
end
