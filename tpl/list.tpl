<ul>
			<li><a href="/new_li.html">(新建)</a></li>
			<% links.forEach(function(link){ %>
  				<li id="<%=link%>"><a href="show.html#<%= link %>.titl"><img height="50" width="50" src=<%=eval("_"+link).img_url%>><p><%=eval("_"+link).titl.substring(4)%></p><p><%=eval("_"+link).type%></p><p><%=eval("_"+link).xg%></p></a></li>
			<% }) %>
</ul>