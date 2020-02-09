<%@ include file="/init.jsp" %>

<%
Map<String, Object> data = new HashMap<>();

data.put("test", "test");
%>

<div class="react-component">
	<react:component
		data="<%= data %>"
		module="js/App.es"
	/>
</div>