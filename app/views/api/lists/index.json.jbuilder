# no .each for object
@lists.each do |list|
  json.set! list.id do
    json.partial! 'api/lists/list', list: list
  end
end

# json.partial! 'api/lists/list', list: @list
