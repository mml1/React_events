1.upto(10) do |e|
	Event.create(
		name: "Event #{e}",
		description: "This is event number #{e}",
		event_date: Date.today + rand(9).months,
		place: "Place number #{e}"
	)
end