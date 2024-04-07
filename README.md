<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
<div class="container">
  <div class="Logo">
    <img src="https://assets.codepen.io/10811741/Doompause_Emporium_Logo_Edit.png" alt="" />
  </div>
  <div class="Assignment-members-and-details" style="background-color:Tomato;">
    <h1>Doompause Emporium - Ecommerce WebApp</h1>


<h2>Version Log</h2>

<p>Version 1.2 - March 31, 2024 </p>

<p>Version 1.3 - April 7, 2024 </p>


<h2>Final Design Report:</h2>

<p>This application was written as an assignment from Grand Canyon University as a Senior Project<strong>&nbsp;CST-452</strong>. This document will address is the&nbsp;development of a web application for online sales. The company, with its rich history in the trade of medieval weapons, is seeking to expand its reach to customers globally through an online platform. Background Information:&nbsp;The company has been in business for hundreds of years, offering medieval weapons for both defensive and offensive combat. Over the years, it has built a reputation for quality and authenticity. However, with changing times and the rise of digital commerce, the company has found it increasingly difficult to reach customers.The proposed web application will allow users to view items, read weapon descriptions, and see the prices of the items. It will also offer an online shopping cart where customers can add, remove, and edit the quantity of products. This digital transformation aims to make shopping more convenient for customers and expand the company&rsquo;s customer base.By addressing these needs, the company hopes to continue its tradition of excellence while adapting to the modern marketplace.</p>

<p>AUTHORS-</p>

<p>&nbsp;&nbsp;&nbsp;</p>

<table cellspacing="0" class="Table" style="border-collapse:collapse; border:none; margin-left:7px; width:630px">
	<tbody>
		<tr>
			<td style="background-color:#d9d9d9; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black; vertical-align:top; width:186px">
			<p>Name</p>
			</td>
			<td style="background-color:#d9d9d9; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:1px solid black; vertical-align:top; width:240px">
			<p>Role</p>
			</td>
			<td style="background-color:#d9d9d9; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:1px solid black; vertical-align:top; width:204px">
			<p>Department</p>
			</td>
		</tr>

		<tr>
			<td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; vertical-align:top; width:186px">
			<p>Ryan Coon</p>
			</td>
			<td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; vertical-align:top; width:240px">
			<p>Backend, FrontEnd and Database Development</p>
			</td>
			<td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; vertical-align:top; width:204px">
			<p>Software Engineering</p>
			</td>
		</tr>
	</tbody>
</table>
<h2>Key Technical Design Decisions :</h2>

<table border="0" cellpadding="1" cellspacing="1" style="width:674.6px">
	<tbody>
		<tr>
			<td style="width:106px">
			<p>&nbsp;<img alt="interactive connection" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" style="float:left; width:35px" />&nbsp;React</p>
			</td>
			<td style="width:99px">
			<p><img alt="html cleaner" src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png" style="float:left; width:45px" />Boostrap</p>
			</td>
			<td style="width:98px">
			<p><img alt="Word to html" src="https://www.logolynx.com/images/logolynx/98/980c5fe716efb66c936eebe1937d5489.png" style="float:left; width:45px" /> Spring Boot</p>
			</td>
			<td style="width:92px">
			<p><img alt="replace text" src="https://th.bing.com/th/id/OIP.D87KXcDLtggvLLrmHnairwHaJG?pid=ImgDet&amp;rs=1" style="float:left; width:35px" />&nbsp; &nbsp;Spring Security</p>
			</td>
			<td style="width:124px">
			<p><img alt="gibberish" src="https://th.bing.com/th/id/OIP.Wd9moNdvBsgsNDMl6V1BegHaCn?pid=ImgDet&amp;rs=1" style="float:left; width:45px" />&nbsp;REST API</p>
			</td>
			<td style="width:125px">
			<p><img alt="html table div" src="https://th.bing.com/th/id/R.255b77e251b19a6d0600634d2ff9b006?rik=2D3kq1fky6LYpg&amp;pid=ImgRaw&amp;r=0" style="float:left; width:45px" />&nbsp;Database</p>
			</td>
		</tr>
	</tbody>
</table>

<h2>Risks:</h2>

<p>Assumptions, risks, and constraints are an integral part of the technical design process. Here are some that could affect the technical design of the system:</p>

<p style="margin-left:40px"><em><strong>Assumed Factors:</strong></em></p>

<ol>
	<li>Reliable Third-Party Services: It&rsquo;s assumed that third-party services such as the payment gateway are reliable and secure.</li>
	<li>Stable Internet Connection: The system assumes users have a stable internet connection for seamless browsing and transactions.</li>
	<li>User Tech Savviness: It&rsquo;s assumed that users have a basic understanding of how to navigate web applications.</li>
</ol>

<p style="margin-left:40px"><em><strong>Identified Risks:</strong></em></p>

<ol>
	<li>Third-Party Service Failure: There&rsquo;s a risk that third-party services might experience downtime or other issues, affecting the application&rsquo;s functionality.</li>
	<li>Security Breaches: Despite using secure payment gateways, there&rsquo;s always a risk of security breaches and data theft.</li>
	<li>Technical Debt: Rapid development to meet deadlines might lead to shortcuts and workarounds, accumulating technical debt.</li>
</ol>

<p style="margin-left:40px"><em><strong>Constraints:</strong></em></p>

<ol>
	<li>Budget: The budget could limit the number of features that can be implemented or the technologies that can be used.</li>
	<li>Time: The project timeline might not allow for extensive testing or the implementation of all desired features.</li>
</ol>

<p style="margin-left:40px"><em><strong>Potential Solutions:</strong></em></p>

<ol>
	<li>Backup Third-Party Services: Have backup third-party services in case the primary ones fail.</li>
	<li>Regular Security Audits: Conduct regular security audits to identify and fix potential security vulnerabilities.</li>
	<li>Prioritize Features: Prioritize features based on their impact on user experience and business value to manage time and budget constraints effectively.</li>
</ol>

<p>The actual factors will depend on the specific circumstances of the project and should be identified through thorough analysis and discussion with all stakeholders.</p>

<h2>Technical Requirements:</h2>

<table border="1" cellpadding="1" cellspacing="1" style="width:846.6px">
	<thead>
		<tr>
			<th scope="col" style="width: 53px;">FR ID</th>
			<th scope="col" style="width: 66px;">TI ID</th>
			<th scope="col" style="width: 712px;"><strong><span style="font-size:11.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Technical Requirement</span></span></strong></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="width:53px">&nbsp;</td>
			<td style="width:66px">001</td>
			<td style="width:712px"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Lombok to reduce boiler plate code. Lombok.jar - Backend</span></span></td>
		</tr>
		<tr>
			<td style="width:53px">&nbsp;</td>
			<td style="width:66px">002</td>
			<td style="width:712px"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Upgrade to Java Development Kit 21</span></span></td>
		</tr>
		<tr>
			<td style="width:53px">&nbsp;</td>
			<td style="width:66px">003</td>
			<td style="width:712px">
			<p><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">import jakarta.persistence.Entity;&nbsp; import jakarta.persistence.Table;&nbsp; import java.math.BigDecimal; import java.util.Date;</span></span></p>
			</td>
		</tr>
		<tr>
			<td style="width:53px">&nbsp;</td>
			<td style="width:66px">004</td>
			<td style="width:712px"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Custom REST Resource: @RepositoryRestResource(collectionResourceRel = &quot;productCategory&quot;, path = &quot;product-category&quot;) in DAO product category interface. Name of JSON entry path is the /product-category.</span></span></td>
		</tr>
		<tr>
			<td style="width:53px">&nbsp;</td>
			<td style="width:66px">005</td>
			<td style="width:712px"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">MySQL57Dialect has been deprecated; use org.hibernate.dialect.MySQLDialect instead</span></span></td>
		</tr>
      		<tr>
			<td style="width:53px">&nbsp;</td>
			<td style="width:66px">006</td>
			<td style="width:712px"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Springboot 4, JpaRepositorys, JDBC Driver, WebDev Tools, Crud Repository.</span></span></td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h2><span style="font-size:13pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Software Requirements</span></span></h2>

<p style="margin-left:40px"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="background-color:white"><span style="color:black">The software requirements for the Doompause Emporium&rsquo;s web application are as follows:</span></span></span></span></p>

<h3 style="margin-left:80px"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Design and Development Software</span></span></strong><span style="background-color:white"><span style="color:black">:</span></span></span></span></h3>

<ol style="margin-left:80px">
	<li>
	<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Integrated Development Environment (IDE)</span></span></strong><span style="background-color:white"><span style="color:black">: An IDE like Visual Studio Code, Sublime Text, or Atom for writing and managing code.</span></span></span></span></p>
	</li>
	<li><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Version Control System</span></span></strong><span style="background-color:white"><span style="color:black">: Git for version control to track changes and coordinate work between different team members.</span></span></span></span></li>
	<li><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Frontend Development</span></span></strong><span style="background-color:white"><span style="color:black">: JavaScript, HTML, and CSS for creating the user interface. You might also use libraries or frameworks like React or AngularJS to simplify the development process.</span></span></span></span></li>
	<li><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Backend Development</span></span></strong><span style="background-color:white"><span style="color:black">: Spring Boot and Spring Boot Security for server-side operations.</span></span></span></span></li>
	<li><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Database Management System</span></span></strong><span style="background-color:white"><span style="color:black">: MySQL for managing application data.</span></span></span></span></li>
</ol>

<h3 style="margin-left:77px"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Server-Side Software Requirements</span></span></strong><span style="background-color:white"><span style="color:black">:</span></span></span></span></h3>

<ol style="margin-left:80px">
	<li>
	<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Operating System</span></span></strong><span style="background-color:white"><span style="color:black">: A stable operating system like Linux is recommended for hosting the server.</span></span></span></span></p>
	</li>
	<li><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Web Server</span></span></strong><span style="background-color:white"><span style="color:black">: A web server like Apache or Nginx to serve the web application.</span></span></span></span></li>
	<li><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Backend Framework</span></span></strong><span style="background-color:white"><span style="color:black">: Spring Boot and Spring Boot Security for handling server-side operations.</span></span></span></span></li>
	<li><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Database</span></span></strong><span style="background-color:white"><span style="color:black">: MySQL for data storage and retrieval.</span></span></span></span></li>
</ol>

<h3 style="margin-left:77px"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Client-Side Software Requirements</span></span></strong><span style="background-color:white"><span style="color:black">:</span></span></span></span></h3>

<ol style="margin-left:80px">
	<li>
	<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Web Browser</span></span></strong><span style="background-color:white"><span style="color:black">: The application should be compatible with all major web browsers like Chrome, Firefox, Safari, and Edge.</span></span></span></span></p>
	</li>
</ol>

<h3 style="margin-left:77px"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Hosting Platform Software Requirements</span></span></strong><span style="background-color:white"><span style="color:black">:</span></span></span></span></h3>

<ol style="margin-left:80px">
	<li>
	<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Operating System</span></span></strong><span style="background-color:white"><span style="color:black">: The hosting platform should support the chosen operating system (like Linux).</span></span></span></span></p>
	</li>
	<li>
	<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Web Server</span></span></strong><span style="background-color:white"><span style="color:black">: The hosting platform should support the chosen web server (like Apache or Nginx).</span></span></span></span></p>
	</li>
	<li>
	<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Backend Framework</span></span></strong><span style="background-color:white"><span style="color:black">: The hosting platform should support Spring Boot.</span></span></span></span></p>
	</li>
	<li>
	<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="background-color:white"><span style="color:black">Database</span></span></strong><span style="background-color:white"><span style="color:black">: The hosting platform should support MySQL.</span></span></span></span></p>
	</li>
</ol>

<p>&nbsp;</p>

<h2><span style="font-size:14pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Architecture</span></span></h2>

<p style="margin-left:38px"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The web application for Doompause Emporium will have a two-tier architecture:</span></span></p>

<ol style="margin-left:80px">
	<li><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Frontend (Client Tier): The frontend of the application will be built using JavaScript, HTML, and CSS. These technologies are standard for web development and will ensure a user-friendly interface and seamless user experience. The front end will be responsible for presenting data to users and handling user interactions.</span></span></li>
	<li><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Backend (Server Tier): The backend will be powered by Spring Boot and Spring Boot Security. Spring Boot simplifies the setup of standalone Spring applications, while Spring Boot Security will handle secure transactions. MySQL will be used for database management, ensuring efficient data storage and retrieval. The backend will handle business logic, data storage, security, and communication with the frontend.</span></span></li>
</ol>

<p style="margin-left:38px"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The purpose of this web application is to expand the company&rsquo;s reach to customers globally, adapting to the changing shopping habits of customers in the digital age. The benefits include increased reach, improved customer experience, and efficient operations. The main objectives are to develop a user-friendly web application with an intuitive interface, ensure secure online transactions with Spring Boot Security, efficiently manage data with MySQL, and launch the web application within the specified timeline and budget.</span></span></p>

<p>&nbsp;</p>
<p style="text-align:center"><img alt="" src="https://assets.codepen.io/10811741/Picture1.png" /></p>


<h2><span style="font-size:13pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Application Architecture</span></span></h2>

<p style="margin-left:40px"><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The design and construction of the software application for Doompause Emporium will involve several patterns and techniques:</span></span></p>

<ol style="margin-left:40px">
	<li><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong>Model-View-Controller (MVC)</strong>: This design pattern separates the application into three interconnected components. The Model represents the application data and business rules, the View is the user interface and presentation of data, and the Controller handles the input from users. This pattern is commonly used in web applications and will help in maintaining a clean separation of concerns among the components.</span></span></li>
	<li><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong>Responsive Web Design</strong>: This technique ensures that the web application&rsquo;s user interface adjusts dynamically, considering the characteristics of the device used (desktop, mobile, tablet, etc.). It enhances user experience as it provides optimal viewing across a wide range of devices.</span></span></li>
	<li><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong>Object-Relational Mapping (ORM)</strong>: ORM is a technique that lets you interact with your database, like MySQL in this case, in an object-oriented manner. With ORM tools, you can manipulate data as objects, making it easier to create, retrieve, update, and delete records without having to write SQL queries.</span></span></li>
	<li><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong>Spring Security</strong>: Spring Security is a powerful and highly customizable authentication and access-control framework. It is used to secure Spring-based applications and provides protection against attacks like session fixation, clickjacking, cross-site request forgery, etc.</span></span></li>
	<li><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong>RESTful API Design</strong>: Representational State Transfer (REST) APIs provide a way for the client-side of an application to communicate with the server-side. This architectural style allows different components of the application to communicate over HTTP in a way that mimics the behavior of web browsers and servers.</span></span></li>
	<li><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong>Agile Development</strong>: Agile development is a project management methodology that involves continuous iteration of development and testing throughout the software development lifecycle of the project. This approach promotes adaptive planning, evolutionary development, early delivery, and continuous improvement.</span></span></li>
</ol>
<p>&nbsp;</p>

<p style="text-align:center"><img alt="" src="https://assets.codepen.io/10811741/Architecture+DEEA.PNG" /></p>

<h2>Spring Security</h2>

<p>Spring Security is a framework that provides&nbsp;<a href="https://docs.spring.io/spring-security/reference/features/authentication/index.html">authentication</a>,&nbsp;<a href="https://docs.spring.io/spring-security/reference/features/authorization/index.html">authorization</a>, and&nbsp;<a href="https://docs.spring.io/spring-security/reference/features/exploits/index.html">protection against common attacks</a>. With first class support for securing both&nbsp;<a href="https://docs.spring.io/spring-security/reference/servlet/index.html">imperative</a>&nbsp;and&nbsp;<a href="https://docs.spring.io/spring-security/reference/reactive/index.html">reactive</a>&nbsp;applications, it is the de-facto standard for securing Spring-based applications.</p>

<p>&nbsp;</p>

<p style="text-align:center"><img alt="" src="https://assets.codepen.io/10811741/desecurity.png" /></p>

</body>
</html>