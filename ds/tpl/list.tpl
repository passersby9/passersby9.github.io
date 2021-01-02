<ul>
			<li><a href="/new_li.html">(新建)</a></li>
			<% links.forEach(function(link){ %>
  				<li><a href="show.html#<%= link %>"><%=link%></a></li>
			<% }) %>
		</ul>
