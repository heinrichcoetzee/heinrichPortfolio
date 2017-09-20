angular.module("viewCache", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/landing.html","<div class=\"first-section\">\n	<div class=\"container\">\n		<div class=\"mainTextHolder\">\n			<h1>I<span class=\"greenText largeText\">\'</span>m</h1>\n			<h1 class=\"greenText\">Heinrich</h1>\n			<h1>Coetzee</h1>\n			<h3>Front-end Engineer</h3>\n		</div>\n		<div class=\"resumeBlock\">\n			<p>I am a front end developer currently using Angular.js as a framework with the addition of bootstrap UI for responsive design and underscore.js for data manipulation. </p>	\n			<p>I use Gulp to build my projects and I am comfortable using GIT or SVN. </p>\n			<p>My ideal work environment will be working on Mac OS running Sublime or visual studio code.</p>\n			<a href=\"https://www.dropbox.com/s/wzx0s3rxg29v7ae/Heinrich%20Coetzee%20CV.pdf?dl=0\" target=\"_blank\"><button class=\"btn btn-primary\">Download Resume</button></a>\n		</div>\n	</div>\n</div>\n\n<div class=\"second-section\">\n	<div class=\"container\">\n		<div class=\"experiences row\">\n			<div class=\"col-xs-1 hideMobile\"><br/></div>\n			<div class=\"col-sm-10 col-xs-12\">\n				<div class=\"col-xs-12\">\n					<h1>Experience</h1>\n					<h3>My Knowledge Level</h3>\n				</div>\n			<br/>\n				<div class=\"experienceBars col-xs-12\" ng-repeat=\"item in landingCtrl.model.experiences\">\n					<div class=\"col-sm-2 col-xs-12\">\n						<em>{{item.description}}</em>\n					</div>\n					<div class=\"col-sm-10 col-xs-12\">\n						<uib-progressbar animate=\"true\" value=\"item.level\"></uib-progressbar>\n					</div>\n				</div>\n				</div>\n			<div class=\"col-xs-1 hideMobile\"><br/></div>\n		</div>\n	</div>\n</div>\n\n\n<div class=\"third-section\">\n	<div class=\"container\">\n		<div class=\"workExperiences\">\n				<h1>Work Experience</h1>\n				<h3>The Timeline</h3>\n			<div class=\"row\">\n				<div class=\"col-sm-5 col-xs-12\">\n					<div class=\"timelineLeft\">\n						<h5 class=\"greenText\">2015-current</h5>\n						<h4>InfoSlips</h4>\n						<p>Front-end Developer</p>\n						<p class=\"greyText paragraph\">My Responsibilities include building, designing data driven responsive web applications. These web applications contains charts and grids which are developed using either Kendo UI or chart.js. Other responsibilities includes managing Jira for one client and assigning tasks to developers.</p>\n					</div>\n				</div>\n				<div class=\"col-sm-2 col-xs-12 timeline\">\n					<center><img src=\"timeline.png\" height=\"300px\"></center>\n				</div>\n				<div class=\"col-sm-5 col-xs-12\">\n					<div class=\"timelineRight\">\n						<h5 class=\"greenText\">2009-2015</h5>\n						<h4>Judea Harvest</h4>\n						<p>Multi-media designer</p>\n						<p class=\"greyText paragraph\">My Responsibilities included building, designing and maintaining the companies and sub divisions websites. Also included the making and production of multiple short-films for promotional purposes.</p>\n					</div>\n				</div>\n\n			</div>\n		</div>\n	</div>\n</div>");
$templateCache.put("views/portfolio.html","<div class=\"portfolioPage\">\n	<div class=\"container\">\n		<div class=\"col-md-12 disclaimer\">\n			These projects were developed by me, from Wireframe to final product.  These projects are not hosted online because of the current industry that I work in. These templates are developed and hosted only on a git repository for use by InfoSlips platform.\n		</div>\n		<div class=\"col-md-4\" ng-repeat=\"work in portCtrl.model.portfolioLinks\">\n			<div class=\"portfolioBlock\">\n				<div class=\"previewThumb\"><div ng-click=\"mainCtrl.showiframe(work.url,work.desc)\" target=\"_blank\">\n					<img ng-src=\"{{work.thumb}}\">\n				</div></div>\n				<div class=\"description\">{{work.desc}}</div>\n			</div>\n		</div>\n	</div>\n</div>");
$templateCache.put("views/partial/iframeView.html","<div class=\"iframeContainer\">\n\n		<div class=\"iframe\">\n		<iframe ng-src=\"{{mainCtrl.dataService.iframeUrl}}\" style=\"border: 0; width: 100%; height: 100%\"></iframe>\n		</div>\n	\n</div>\n");}]);