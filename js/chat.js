         /* When the user clicks on the button, 
              toggle between hiding and showing the dropdown content */
              function myFunction() {
                document.getElementById("myDropdown").classList.toggle("show");
              }
              
              // Close the dropdown if the user clicks outside of it
              window.onclick = function(event) {
                if (!event.target.matches('.dropbtn')) {
                  var dropdowns = document.getElementsByClassName("dropdown-content");
                  var i;
                  for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                      openDropdown.classList.remove('show');
                    }
                  }
                }
              }



              // js for selection of image in profile start
              const realFileBtn = document.getElementById("real-file");
              const customBtn = document.getElementById("custom-button");
              const previewContainer = document.getElementById("imgDiv");
              const previewImage = previewContainer.querySelector(".image-preview--image")
              
              customBtn.addEventListener("click",function(){
                realFileBtn.click();
              });


              realFileBtn.addEventListener("change", function() {
              const file =this.files[0];
              if (file) {

                const reader =new FileReader();
                previewImage.style.display = "block";
                reader.addEventListener("load",function(){
                  previewImage.setAttribute("src",this.result);
                });
                reader.readAsDataURL(file);
              }
              });

              // js for selection of image in profile end


              //Modal Settings js Start
              function accntfunc()
              {
                document.getElementById("mbody1").style.display="none";
                document.getElementById("mbody2").style.display="block";
                document.getElementById("backbtn").style.display="block";

              } 
              function chat_wal_func()
              {
                document.getElementById("mbody1").style.display="none";
                document.getElementById("mbody3").style.display="block";
                document.getElementById("backbtn").style.display="block";

              } 

            
              

              function backfunc() {
             if (document.getElementById("mbody3").style.display=="block") {
               
                 document.getElementById("mbody3").style.display="none";
                document.getElementById("mbody1").style.display="block";
                document.getElementById("backbtn").style.display="none";

               }
             else if (document.getElementById("mbody2").style.display=="block") {
               
               document.getElementById("mbody2").style.display="none";
              document.getElementById("mbody1").style.display="block";
              document.getElementById("backbtn").style.display="none";

             }
             
             } 

            //Modal Settings End



                         //js for conversation list icons Strat
                         function switchVisible() {
                            if (document.getElementById('chat-list') !== undefined) {
                              if (document.getElementById('chat-list').style.display == 'Block') {
                                document.getElementById('chat-list').style.display = 'none';
                                document.getElementById('call-list').style.display = 'Block';
                                document.getElementById('Contacts-list').style.display = 'none';
                                document.getElementById('Notification-list').style.display = 'none';
                              } else {
             
                               document.getElementById("chati").classList.add("active");
                                  document.getElementById("calli").classList.remove("active");
                                  document.getElementById("contacti").classList.remove("active");
                                  document.getElementById("notifyi").classList.remove("active");
             
             
                                document.getElementById('chat-list').style.display = 'Block';
                                document.getElementById('call-list').style.display = 'none';
                                document.getElementById('Contacts-list').style.display = 'none';
                                document.getElementById('Notification-list').style.display = 'none';
                              
                               }
                            }
                          }  
                          function switchVisible1() {
                            if (document.getElementById('call-list') !== undefined) {
                              if (document.getElementById('call-list').style.display == 'Block') {
                                document.getElementById('call-list').style.display = 'none';
                                document.getElementById('Contacts-list').style.display = 'Block';
                                 document.getElementById('chat-list').style.display = 'none';
                                document.getElementById('Notification-list').style.display = 'none';
                              } else {
                               document.getElementById("chati").classList.remove("active");
                                  document.getElementById("calli").classList.add("active");
                                  document.getElementById("contacti").classList.remove("active");
                                  document.getElementById("notifyi").classList.remove("active");
             
             
                               document.getElementById('call-list').style.display = 'Block';
                                document.getElementById('chat-list').style.display = 'none';
                                document.getElementById('Contacts-list').style.display = 'none';
                                document.getElementById('Notification-list').style.display = 'none';
                              
                               }
                            }
                          }function switchVisible2() {
                            if (document.getElementById('Contacts-list') !== undefined) {
                              if (document.getElementById('Contacts-list').style.display == 'Block') {
                                document.getElementById('Contacts-list').style.display = 'none';
                                document.getElementById('Notification-list').style.display = 'Block';
                                 document.getElementById('chat-list').style.display = 'none';
                                document.getElementById('call-list').style.display = 'none';
                              } else {
             
                               document.getElementById("chati").classList.remove("active");
                                  document.getElementById("calli").classList.remove("active");
                                  document.getElementById("contacti").classList.add("active");
                                  document.getElementById("notifyi").classList.remove("active");
             
             
                               document.getElementById('call-list').style.display = 'none';
                                document.getElementById('chat-list').style.display = 'none';
                                document.getElementById('Contacts-list').style.display = 'Block';
                                document.getElementById('Notification-list').style.display = 'none';
                              
                               }
                            }
                          }
                          function switchVisible3() {
                            if (document.getElementById('Notification-list') !== undefined) {
                              if (document.getElementById('Notification-list').style.display == 'Block') {
                                document.getElementById('Notification-list').style.display = 'none';
                                document.getElementById('chat-list').style.display = 'Block';
                                 document.getElementById('Contacts-list').style.display = 'none';
                                document.getElementById('call-list').style.display = 'none';
                              } else {
             
                               document.getElementById("chati").classList.remove("active");
                                  document.getElementById("calli").classList.remove("active");
                                  document.getElementById("contacti").classList.remove("active");
                                  document.getElementById("notifyi").classList.add("active");
             
                                  
                               document.getElementById('call-list').style.display = 'none';
                                document.getElementById('chat-list').style.display = 'none';
                                document.getElementById('Contacts-list').style.display = 'none';
                                document.getElementById('Notification-list').style.display = 'Block';
                              
                               }
                            }
                          }
                            //js for conversation list icons end

             
                         //  for new group participent selection and remove start
                          function mydom() {
                            var htmldom = document.getElementById("imgforgroup").src;
                           //  console.log('mydata>>>>>>>', htmldom);
                            var elem = document.createElement("img");
                            elem.setAttribute("class", "Participent-img");
                            elem.setAttribute("id","class1");
                            document.getElementById("target").appendChild(elem);
                            elem.src = htmldom;
                          }
             
                          function remove() {
                           document.getElementById("class1").style.display='none';
                          }
  
                         //  for new group participent selection and remove end

                         