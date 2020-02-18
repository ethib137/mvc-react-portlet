<%@ include file="/init.jsp" %>

<%
Map<String, Object> data = new HashMap<>();

String apiKey = (String)request.getAttribute("APIKey");

data.put("apiKey", apiKey);
%>

<div class="react-component">
	<react:component
		data="<%= data %>"
		module="js/Index.es"
	/>
</div>