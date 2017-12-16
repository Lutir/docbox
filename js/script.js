$(document).ready(function()
{		
			//login form style
		    $('#login-form-link').click(function(e) {
				$("#login-form").delay(100).fadeIn(100);
		 		$("#register-form").fadeOut(100);
				$('#register-form-link').removeClass('active');
				$(this).addClass('active');
				e.preventDefault();
			});
			$('#register-form-link').click(function(e) {
				$("#register-form").delay(100).fadeIn(100);
		 		$("#login-form").fadeOut(100);
				$('#login-form-link').removeClass('active');
				$(this).addClass('active');
				e.preventDefault();
			});

			//speciality dropdown module code
			// window.onload=function(){
			//      $('.selectpicker').selectpicker();
			//      $('.rm-mustard').click(function() {
			//        $('.remove-example').find('[value=Mustard]').remove();
			//        $('.remove-example').selectpicker('refresh');
			//      });
			//      $('.rm-ketchup').click(function() {
			//        $('.remove-example').find('[value=Ketchup]').remove();
			//        $('.remove-example').selectpicker('refresh');
			//      });
			//      $('.rm-relish').click(function() {
			//        $('.remove-example').find('[value=Relish]').remove();
			//        $('.remove-example').selectpicker('refresh');
			//      });
			//      $('.ex-disable').click(function() {
			//          $('.disable-example').prop('disabled',true);
			//          $('.disable-example').selectpicker('refresh');
			//      });
			//      $('.ex-enable').click(function() {
			//          $('.disable-example').prop('disabled',false);
			//          $('.disable-example').selectpicker('refresh');
			//      });

			     // scrollYou
			     

			     // preventDefaultttyPrint();
			     // };



			//get speciality details
		$.post('sajid/getSpecialityDetails.php',
				{					
					
				}
				,function(response,status){ 
				// alert("*----Received Data----*\n\nResponse : " + response+"\n\nStatus : " + status);
				// console.log(response);
				
				var p='';
				status = '';
				for(var i=0;i<response.length;i++){
					p = p+response[i];
					if(response[i]=='}' && (response[i+1]=='t' || response[i+1]=='f')){
						status = response[i+1];
						break;
					}
				}				
				p = JSON.parse(p);
				console.log(p);
				// var div = '<li rel="'+ 0 +'" class="selected"><a tabindex="0" style="width:100%"><span class="text">'+p[2]['SpecialityName']+'<i class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>';
				// for(var i=3;i<p.length;i++){
				// 	console.log(p[i]['SpecialityName']);
				// 	div = div + '<li rel="'+ i-2 +'"><a tabindex="0" style="width:100%"><span class="text">'+p[i]['SpecialityName']+'<i class="glyphicon glyphicon-ok icon-ok check-mark"></i></a></li>';
				// }
				// // $('.selectpicker').append(div);	
				var div = '';
				for(var i=2;i<p.length;i++){
					div = div + '<option value="'+ p[i]['SpecialityId']+'">'+ p[i]['SpecialityName'] +'</option>';
				}
				// $('#speciality').html(div).selectpicker('refresh');
				$('#speciality').append(div);


			});
			var option = '';
			$('#speciality').change(function(){
				option = $('select[name=speciality]').val();
				console.log(option);
			});
			

		$('.otp').click(function(){
			console.log("otp requested");
		if(($('#phoneNumber').val()!="sampleuser")&&($('#phoneNumber').val()!="sampleuserClinic")&&($('#phoneNumber').val()!="sampleuserHospital")&&($('#phoneNumber').val()!="sampleuserHospital"))
		{
			$('#otpBox').modal('show');
			$.post('sajid/OTPDocBox.php',
				{					
					data:'"'+$('#phoneNumber').val()+'"'
				}
				,function(response,status){ 
				// alert("*----Received Data----*\n\nResponse : " + response+"\n\nStatus : " + status);
				console.log(response);
				var p='';
				status = '';
				for(var i=0;i<response.length;i++){
					p = p+response[i];
					if(response[i]=='}' && (response[i+1]=='t' || response[i+1]=='f')){
						status = response[i+1];
						break;
					}
				}				
				console.log(p);
				p = JSON.parse(p);
				if(status=='f'){

				}

			});
		}
		else  {
			alert("hello");
			if($('#phoneNumber').val()=="sampleuserClinic")
				login("sampleuserClinic","sampleuserClinic");
				else if($('#phoneNumber').val()=="sampleuserHospital")
					login("sampleuserHospital","sampleuserHospital");
					else 
		login("sampleuser","sampleuser");}
		});



// $("#phoneNumber").keyup(function(event) {
//     if (event.keyCode === 13) {
//     	console.log("login clicked");
//         $("#login").click();
//     }
// });

//otp for registration
		$('.otp1').click(function(){
			if(($('#email1').val()=='')||($('#phNo').val()=='')||($('#name').val()=='')){
					//console.log($('#email1').val()+'heu'+$('#phNo').val()+'kk'+$('#name').val());
					alert('Fill all the required fields!');
					return false;
				}
			var x = $('#email1').val();
			    var atpos = x.indexOf("@");
			    var dotpos = x.lastIndexOf(".");
			    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
			        alert("Not a valid e-mail address");
			        return false;
			    }
			console.log($('#phNo').val());
			$('#otpBox1').modal('show');
			$.post('sajid/OTPDocBox.php',
				{					
					data:'"'+$('#phNo').val()+'"'
				}
				,function(response,status){ 
				// alert("*----Received Data----*\n\nResponse : " + response+"\n\nStatus : " + status);
				console.log(response);
				var p='';
				status = '';
				for(var i=0;i<response.length;i++){
					p = p+response[i];
					if(response[i]=='}' && (response[i+1]=='t' || response[i+1]=='f')){
						status = response[i+1];
						break;
					}
				}				
				console.log(p);
				p = JSON.parse(p);
				if(status=='f'){

				}

			});
		});

		$('#loginForm').submit(function(e){
			e.preventDefault();
		});

		$('.checkOTP1').click(function(){
			var phoneNumber = '["'+$('#phNo').val()+'"]';
			var otp1 = '["'+$('#otp1').val()+'"]';
			//check OTP
			$.post('sajid/authOTP.php',
				{					
				 	otp: "["+otp1+','+phoneNumber+"]"
				}
				,function(response,status){ 
					if(response=="otp invalid"){
						window.location.replace('logout.php');
						
					}
					console.log(response);
				// alert("*----Received Data----*\n\nResponse : " + response+"\n\nStatus : " + status);
				var p = '';
					for(var i=0;i<response.length;i++){
						p = p+response[i];
						if(response[i]=='}' && (response[i+1]=='t' || response[i+1]=='f')){
							status = response[i+1];
							break;
						}
					}	
					console.log(p);
					p = JSON.parse(p);
					console.log(p);
					console.log(p['status']);
					if(p['status']=='yes'){
						//redirect to this page
						$('.otpError').text('');
						$('#otpBox').modal('hide');						
					}
					else if(p['status']=='no'){
						$('.otpError').text('Incorrect OTP');
						return false;
					}

			});	
			var a = [];
			a.push($('#email1').val());
			a = JSON.stringify(a);
			console.log(a);	
				$.post('sajid/checkExistingUser.php',
								{					
								 	 email : a
								}
								,function(response,status){ 										
								// alert("*----Received Data----*\n\nResponse : " + response+"\n\nStatus : " + status);
								//console.log(JSON.parse(response));	
								console.log(response);	
								var p='';
									status = '';
									for(var i=0;i<response.length;i++){
										p = p+response[i];
										if(response[i]=='}' && (response[i+1]=='t' || response[i+1]=='f')){
											status = response[i+1];
											break;
										}
									}				
									
									p = JSON.parse(p);
									//console.log(p['CustomerId']);
									//console.log(p);
									if(p['CustomerId']!=0)
									{
										alert("You already have an account with us");
										login($('#email1').val(),$('#phNo').val());
										 $('.afterClick').show('slow');
										 return;
									}
									
									else{
								
							
			

			var a = [];
				var b= [];
				var activeStatus = 0;
				var doctype = 0;
				
				var timeStamp = Math.floor(Date.now() / 1000);
				console.log(timeStamp);
				if($('#doctorParam').is(':checked')){
					doctype = 2;
				}
				else if($('#studentParam').is(':checked')){
					doctype = 1;
				}
				b.push('0',$('#email1').val(),$('#phNo').val(),(option),$('#name').val(),'','','','','','','','','','','',doctype);
				a.push(b);
				b= [];
				b.push(timeStamp);
				a.push(b);
				localStorage.setItem('doctype',doctype);
				a = JSON.stringify(a);
				
				$.post('sajid/register.php',
								{					
								 	 emailPasswordJSON : a
								}
								,function(response,status){ 										
								// alert("*----Received Data----*\n\nResponse : " + response+"\n\nStatus : " + status);
								console.log(response);	
								var p='';
									status = '';
									for(var i=0;i<response.length;i++){
										p = p+response[i];
										if(response[i]=='}' && (response[i+1]=='t' || response[i+1]=='f')){
											status = response[i+1];
											break;
										}
									}				
									console.log(p);
									p = JSON.parse(p);
									console.log(p);
									localStorage.setItem('CustomerId',p['CustomerId']);
									localStorage.setItem('Name',p['Name']);
									localStorage.setItem('token',p['HashCode']);
									var lat = '';
									localStorage.setItem('latitude',lat);
									
								//window.location = 'profile.php';
							});	
							}});	
		});
function login(email,phoneNumber)
{
	
						//redirect to this page
										
						$.post('sajid/loginDocbox.php',
							{					
							 	phoneNumber:'["'+phoneNumber+'"]',
							 	email:'["'+email+'"]'
							}
							,function(response,status){ 					
								var p = '';
								for(var i=0;i<response.length;i++){
									p = p+response[i];
									if(response[i]=='}' && (response[i+1]=='t' || response[i+1]=='f')){
										status = response[i+1];
										break;
									}
								}	
								console.log(p);
								p = JSON.parse(p);
								console.log(p['status']);
								if(p['status']=='yes'){
									//redirect to this page
									$('.loginError').text('');
									localStorage.setItem('token',p['token']);
									localStorage.setItem('CustomerId',p['CustomerId']);
									console.log(localStorage.getItem('CustomerId',p['CustomerId']));
									console.log(localStorage.getItem('token',p['token']));
									//getting all details and storing in localStorage
										$.post('sajid/fetchDoctorPersonalInfo.php',
											{					
												doctorIdJSON: '["'+p['CustomerId']+'"]',
												token: '["'+p['token']+'"]'
											}
											,function(response,status){ 
											// alert("*----Received Data----*\n\nResponse : " + response+"\n\nStatus : " + status);
											console.log(response);
											var p='';
											status = '';
											for(var i=0;i<response.length;i++){
												p = p+response[i];
												if(response[i]=='}' && (response[i+1]=='t' || response[i+1]=='f')){
													status = response[i+1];
													break;
												}
											}				
											// console.log(p);
											p = JSON.parse(p);
											var docDays = [];
											console.log(p['personalInfo']);
											console.log(p['personalInfo'].length);
											console.log(p['personalInfo'][3]);
											for(var i=3;i<p['personalInfo'].length;i++){
												docDays.push(p['personalInfo'][i]['onlineDays']);
												console.log(p['personalInfo'][i]['onlineDays']);
											}
											console.log(docDays);
											console.log(p['appointmentSettings']);
											docDays = JSON.stringify(docDays);
											localStorage.setItem('docDays',docDays);
											console.log(p['status']);
											console.log(p['personalInfo'][1]['Name']);
											if(p['status']=='yes'){
												//adding to localStorage
																										
												localStorage.setItem('userDetails["Name"]',p['personalInfo'][1]['Name']);
												localStorage.setItem('userDetails["CustomerEmail"]',p['personalInfo'][1]['CustomerEmail']);
												localStorage.setItem('userDetails["password"]',p['personalInfo'][1]['password']);
												localStorage.setItem('userDetails["Speciality"]',p['personalInfo'][1]['Speciality']);
												localStorage.setItem('userDetails["Dob"]',p['personalInfo'][1]['Dob']);
												localStorage.setItem('userDetails["Designation"]',p['personalInfo'][1]['Designation']);
												localStorage.setItem('userDetails["Address"]',p['personalInfo'][1]['Address']);
												localStorage.setItem('userDetails["Awards"]',p['personalInfo'][1]['Awards']);
												localStorage.setItem('userDetails["Experience"]',p['personalInfo'][1]['Experience']);
												localStorage.setItem('userDetails["ConsultFee"]',p['personalInfo'][1]['ConsultFee']);									
												localStorage.setItem('userDetails["ProfilePic"]',p['personalInfo'][1]['ProfilePic']);
												// localStorage.setItem('userDetails["HomePageId"]',p['personalInfo'][6]['HomePageId']);
												// console.log(localStorage.getItem('userDetails["ProfilePic"]'));
												localStorage.setItem('userDetails["PositionLat"]',p['personalInfo'][1]['PositionLat']);									
												localStorage.setItem('userDetails["PositionLong"]',p['personalInfo'][1]['PositionLong']);									
												localStorage.setItem('userDetails["CoverPicture"]',p['personalInfo'][1]['CoverPicture']);									
												localStorage.setItem('userDetails["Gender"]',p['personalInfo'][1]['Gender']);									
												localStorage.setItem('userDetails["LastModifiedDate"]',p['personalInfo'][1]['LastModifiedDate']);																		
												localStorage.setItem('userDetails["ActiveStatus"]',p['personalInfo'][1]['ActiveStatus']);									
												localStorage.setItem('userDetails["DoctorType"]',p['personalInfo'][1]['DoctorType']);
												localStorage.setItem('userDetails["HospitalName"]',p['personalInfo'][1]['HospitalName']);
												localStorage.setItem('userDetails["HospitalContact"]',p['personalInfo'][1]['HospitalContact']);
												localStorage.setItem('userDetails["HospitalAddress"]',p['personalInfo'][1]['HospitalAddress']);
												localStorage.setItem('userDetails["HospitalEmail"]',p['personalInfo'][1]['HospitalEmail']);
												localStorage.setItem('userDetails["HospitalWebsite"]',p['personalInfo'][1]['HospitalWebsite']);
												localStorage.setItem('userDetails["HospitalDesignation"]',p['personalInfo'][1]['HospitalDesignation']);
												localStorage.setItem('userDetails["RegistrationNumber"]',p['personalInfo'][1]['RegistrationNumber']);
												localStorage.setItem('userDetails["CustomPrescriptionMargins"]',p['personalInfo'][1]['CustomPrescriptionMargins']);	

// if(p['personalInfo'][6]['HomePageId'] == '3')	
// {
// window.location = 'todaysAppointment.php';	
// }		
// else																					

window.location = 'home.php';																		
											}
										});
										
									
								}
								else{
									alert('Incorrect Credentials! Try again.');
									$('.loginError').text('Incorrect Credentials');
								}
							// alert("*----Received Data----*\n\nResponse : " + response+"\n\nStatus : " + status);

						});
	
}
		$('.checkOTP').click(function(){
			var phoneNumber = '["'+$('#phoneNumber').val()+'"]';
			var otp1 = '["'+$('#otp').val()+'"]';
			//check OTP
			$.post('sajid/authOTP.php',
				{					
				 	otp: "["+otp1+','+phoneNumber+"]"
				}
				,function(response,status){ 
					if(response=="otp invalid"){
						window.location.replace('logout.php');
						
					}
					console.log(response);
				// alert("*----Received Data----*\n\nResponse : " + response+"\n\nStatus : " + status);
				var p = '';
					for(var i=0;i<response.length;i++){
						p = p+response[i];
						if(response[i]=='}' && (response[i+1]=='t' || response[i+1]=='f')){
							status = response[i+1];
							break;
						}
					}	
					console.log(p);
					p = JSON.parse(p);
					console.log(p);
					console.log(p['Message']);
					if(p['Message']=='success'){
						//redirect to this page
						$('.otpError').text('');
						$('#otpBox').modal('hide');						
						$.post('sajid/loginDocbox.php',
							{					
							 	phoneNumber:'["'+$('#phoneNumber').val()+'"]',
							 	email:'["'+$('#email').val()+'"]'
							}
							,function(response,status){ 					
								var p = '';
								for(var i=0;i<response.length;i++){
									p = p+response[i];
									if(response[i]=='}' && (response[i+1]=='t' || response[i+1]=='f')){
										status = response[i+1];
										break;
									}
								}	
								console.log(p);
								p = JSON.parse(p);
								console.log(p['status']);
								if(p['status']=='yes'){
									//redirect to this page
									$('.loginError').text('');
									localStorage.setItem('token',p['token']);
									localStorage.setItem('CustomerId',p['CustomerId']);
									// console.log(localStorage.getItem('CustomerId',p['CustomerId']));
									// console.log(localStorage.getItem('token',p['token']));
									//getting all details and storing in localStorage
										$.post('sajid/fetchDoctorPersonalInfo.php',
											{					
												doctorIdJSON: '["'+localStorage.getItem('CustomerId',p['CustomerId'])+'"]',
												token: '["'+localStorage.getItem('token',p['token'])+'"]'
											}
											,function(response,status){ 
											// alert("*----Received Data----*\n\nResponse : " + response+"\n\nStatus : " + status);
											console.log(response);
											var p='';
											status = '';
											for(var i=0;i<response.length;i++){
												p = p+response[i];
												if(response[i]=='}' && (response[i+1]=='t' || response[i+1]=='f')){
													status = response[i+1];
													break;
												}
											}				
											// console.log(p);
											p = JSON.parse(p);
											var docDays = [];
											console.log(p['personalInfo']);
											console.log(p['personalInfo'].length);
											console.log(p['personalInfo'][3]);
											for(var i=3;i<p['personalInfo'].length;i++){
												docDays.push(p['personalInfo'][i]['onlineDays']);
												console.log(p['personalInfo'][i]['onlineDays']);
											}
											console.log(docDays);
											console.log(p['appointmentSettings']);
											docDays = JSON.stringify(docDays);
											localStorage.setItem('docDays',docDays);
											console.log(p['status']);
											console.log(p['personalInfo'][1]['Name']);
											if(p['status']=='yes'){
												//adding to localStorage
																										
												localStorage.setItem('userDetails["Name"]',p['personalInfo'][1]['Name']);
												localStorage.setItem('userDetails["CustomerEmail"]',p['personalInfo'][1]['CustomerEmail']);
												localStorage.setItem('userDetails["password"]',p['personalInfo'][1]['password']);
												localStorage.setItem('userDetails["Speciality"]',p['personalInfo'][1]['Speciality']);
												localStorage.setItem('userDetails["Dob"]',p['personalInfo'][1]['Dob']);
												localStorage.setItem('userDetails["Designation"]',p['personalInfo'][1]['Designation']);
												localStorage.setItem('userDetails["Address"]',p['personalInfo'][1]['Address']);
												localStorage.setItem('userDetails["Awards"]',p['personalInfo'][1]['Awards']);
												localStorage.setItem('userDetails["Experience"]',p['personalInfo'][1]['Experience']);
												localStorage.setItem('userDetails["ConsultFee"]',p['personalInfo'][1]['ConsultFee']);									
												localStorage.setItem('userDetails["ProfilePic"]',p['personalInfo'][1]['ProfilePic']);
												// localStorage.setItem('userDetails["HomePageId"]',p['personalInfo'][6]['HomePageId']);

												console.log(localStorage.getItem('userDetails["HomePageId"]'));
												localStorage.setItem('userDetails["PositionLat"]',p['personalInfo'][1]['PositionLat']);									
												localStorage.setItem('userDetails["PositionLong"]',p['personalInfo'][1]['PositionLong']);									
												localStorage.setItem('userDetails["CoverPicture"]',p['personalInfo'][1]['CoverPicture']);									
												localStorage.setItem('userDetails["Gender"]',p['personalInfo'][1]['Gender']);									
												localStorage.setItem('userDetails["LastModifiedDate"]',p['personalInfo'][1]['LastModifiedDate']);																		
												localStorage.setItem('userDetails["ActiveStatus"]',p['personalInfo'][1]['ActiveStatus']);									
												localStorage.setItem('userDetails["DoctorType"]',p['personalInfo'][1]['DoctorType']);
localStorage.setItem('userDetails["HospitalName"]',p['personalInfo'][1]['HospitalName']);
localStorage.setItem('userDetails["HospitalContact"]',p['personalInfo'][1]['HospitalContact']);
localStorage.setItem('userDetails["HospitalAddress"]',p['personalInfo'][1]['HospitalAddress']);
localStorage.setItem('userDetails["HospitalEmail"]',p['personalInfo'][1]['HospitalEmail']);
localStorage.setItem('userDetails["HospitalWebsite"]',p['personalInfo'][1]['HospitalWebsite']);
localStorage.setItem('userDetails["HospitalDesignation"]',p['personalInfo'][1]['HospitalDesignation']);	
// if(p['personalInfo'][6]['HomePageId'] != null)
// {if(p['personalInfo'][6]['HomePageId'] == '3')	
// {
// window.location = 'todaysAppointment.php';	
// }		
// else											

window.location = 'home.php';	
// }
// else
// {
// 	 localStorage.setItem('userDetails["HomePageId"]','1');
// }

											}
										});
										
									
								}
								else{
									alert('Incorrect Credentials! Try again.');
									$('.loginError').text('Incorrect Credentials');
								}
							// alert("*----Received Data----*\n\nResponse : " + response+"\n\nStatus : " + status);

						});
					}
					else if(p['Message']=='otp invalid'){
						$('.otpError').text('Incorrect OTP');
						return false;
					}

			});			
			
			
		});

		$('.resendOTP').click(function(){

		});

		$('.resendOTP1').click(function(){

		});



		$('.register1').click(function(){
						
			});
});