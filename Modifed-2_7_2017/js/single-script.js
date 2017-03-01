// JavaScript Document
var element=document.getElementById('s');
var lastCommentID=null;
var angle=0;
var rotateTime=10;
var rotateAngle=7/rotateTime;
var increaseTimeoutID=0;
var decreaseTimeoutID=0;
var rotateNum=0;
var listPosition=-150;
var singleListPosition=-250;
var listDisplayTime=0;
var displayList=true;
var scrollTop=0;
var scrollLeft=0;
var lastScrollTop=0;
var ableScrollTop=false;
var maxScrollHeight=0;
var cancelChooseList=document.createElement("div");
var cancelChooseListImg=null;
var increaseListTimeoutID=0;
var decreaseListTimeoutID=0;
var increaseListLength=0;
var increaseListLengthDoc=0;
var increaseListLengthUnDoc=0;
var increaseScrollLength=0;
var increaseScrollLengthDoc=0;
var increaseScrollLengthUnDoc=0;
var clickChildChildListNum=-1;
var clickChildChildList=false;
var showChildList=true;
var showChildChildListFir=true;
var showChildChildListSec=true;
var showEmotionContent=true;
var showReplyEmotionContent=true;

function inputSearch()
{
	if (element.value=="Search...")
	{
		element.value="";
		element.style.color="#000";
	}
	else
	{
		element.value=s.value;
	}
}

function finishSearch()
{
	if (element.value=="")
	{
		element.value="Search...";
		element.style.color="#999";
		element.style.outlineStyle="none";
	}
}

function inputComment(id)
{
	var commentElement=document.getElementById(id);
		commentElement.style.outlineStyle="solid";
		commentElement.style.outlineColor="#9ec0f7";
		commentElement.style.outlineWidth="2px";
		commentElement.style.backgroundColor="#f3f3f3";
		if (id=="author")
		{
			var warningText=document.getElementById("warning-author");
				warningText.style.visibility="hidden";
		}
		else if (id=="email")
		{
			var warningText=document.getElementById("warning-email");
				warningText.style.visibility="hidden";
		}
}

function finishCommentItem(id)
{
	var commentElement=document.getElementById(id);
		commentElement.style.outlineStyle="none";
		if (commentElement.value=="" && (id=="author" || id=="email"))
		{
			commentElement.style.outlineStyle="solid";
			commentElement.style.outlineColor="#f00";
			commentElement.style.outlineWidth="1px";
			commentElement.style.backgroundColor="#fbdcdc";
			if (id=="author")
			{
				var warningText=document.getElementById("warning-author");
					warningText.style.visibility="visible";
			}
			else
			{
				var warningText=document.getElementById("warning-email");
					warningText.style.visibility="visible";
			}
		}
}

function submitComment()
{
	var author=document.getElementById("author").value;
	var email=document.getElementById("email").value;
		if (author=="")
		{
			alert("Please input UserNames");
			var commentAuthor=document.getElementById("author");
			var commentEmail=document.getElementById("email");
				if (commentAuthor.style.outlineStyle!="solid")
				{
					commentAuthor.style.outlineStyle="solid";
					commentAuthor.style.outlineColor="#f00";
					commentAuthor.style.outlineWidth="1px";
					commentAuthor.style.backgroundColor="#fbdcdc";
					document.getElementById("warning-author").style.visibility="visible";
				}
				if (commentEmail.value=="" && commentEmail.style.outlineStyle!="solid")
				{
					commentEmail.style.outlineStyle="solid";
					commentEmail.style.outlineColor="#f00";
					commentEmail.style.outlineWidth="1px";
					commentEmail.style.backgroundColor="#fbdcdc";
					document.getElementById("warning-email").style.visibility="visible";
					
				}
			return false;
		}
		else if (email=="")
		{
			alert("Please input your Email");
			var commentEmail=document.getElementById("email");
				commentEmail.style.outlineStyle="solid";
				commentEmail.style.outlineColor="#f00";
				commentEmail.style.outlineWidth="1px";
				commentEmail.style.backgroundColor="#fbdcdc";
				document.getElementById("warning-email").style.visibility="visible";
			return false;
		}
	return true;
}

function replyComment(postID,commentID,postURL,author_name,author_email,author_url)
{
	if (lastCommentID!=null)
	{
		if (lastCommentID==commentID)
		{
			var lastContainerDIV=document.getElementById("comment-"+lastCommentID);
				lastContainerDIV.removeChild(lastContainerDIV.lastChild);	
				lastCommentID=null;
		}
		else
		{
			var lastContainerDIV=document.getElementById("comment-"+lastCommentID);
			var containerDIV=document.getElementById("comment-"+commentID);
			var newForm=document.createElement("form");
			var newDIV=null;
			var newInput=null;
			var newEmotionButton=null;
			var newEmotionButtonImg=null;
			var newEmotionContent=null;
				lastContainerDIV.removeChild(lastContainerDIV.lastChild);
				newForm.action=postURL;
				newForm.method="post";
				newForm.onsubmit=function()
				{
					var author=newForm.querySelector(".author");
					var email=newForm.querySelector(".email");
					if (author.value=="")
					{
						alert("Please input your Email");
						if (author.style.outlineStyle!="solid")
						{
							author.style.outlineStyle="solid";
							author.style.outlineColor="#f00";
							author.style.outlineWidth="1px";
							author.style.backgroundColor="#fbdcdc";
							newForm.querySelector(".warning-author").style.visibility="visible";
						}
						if (email.value=="" && email.style.outlineStyle!="solid")
						{
							email.style.outlineStyle="solid";
							email.style.outlineColor="#f00";
							email.style.outlineWidth="1px";
							email.style.backgroundColor="#fbdcdc";
							newForm.querySelector(".warning-email").style.visibility="visible";
					
						}
						return false;
					}
					else if (email.value=="")
					{
						alert("Please input your Email");
						if (email.style.outlineStyle!="solid")
						{
							email.style.outlineStyle="solid";
							email.style.outlineColor="#f00";
							email.style.outlineWidth="1px";
							email.style.backgroundColor="#fbdcdc";
							newForm.querySelector(".warning-email").style.visibility="visible";
						}
						return false;
					}
					return true;	
				}
		
				newDIV=createFormElement("Username*:","author",author_name,commentID);
				newForm.appendChild(newDIV);
		
				newDIV=createFormElement("Email*:","email",author_email,commentID);
				newForm.appendChild(newDIV);
		
				newDIV=createFormElement("Site:","url",author_url,commentID);
				newForm.appendChild(newDIV);
			
			
				newDIV=document.createElement("div");
				newLabel=document.createElement("label");
				newEmotionButton=document.createElement("button");
				newEmotionButtonImg=document.createElement("div");
				newTextarea=document.createElement("textarea");
				newDIV.className="input-content";
				newDIV.style.marginLeft="45px";
				newLabel.for="comment";
				newLabel.appendChild(document.createTextNode("Comments:"));
				newEmotionButton.name="emotion_button";
				newEmotionButton.type="button";
				newEmotionButton.className="reply-emotion";
				newEmotionButton.onclick=function()
				{
					newEmotionContent=document.getElementById("reply-emotion-content-"+commentID);
					if (showReplyEmotionContent)
					{
						showReplyEmotionContent=false;
						newEmotionButton.className="reply-emotion-hover";
						newEmotionContent.style.display="block";
						document.body.addEventListener("click",hideReplyEmotion,false);	
					}
					else
					{
						showReplyEmotionContent=true;
						newEmotionButton.className="reply-emotion";
						newEmotionContent.style.display="none";
						document.body.removeEventListener("click",hideReplyEmotion,false);		
					}
				};
				newEmotionButtonImg.className="reply-emotion-img";
				newEmotionButton.appendChild(newEmotionButtonImg);
				newTextarea.name="comment";
				newTextarea.id="commentText-"+commentID;
				newTextarea.style.backgroundColor="#fff";
				newTextarea.style.width="90%"
				newTextarea.onfocus=function(){
					newTextarea.style.outlineStyle="solid";
					newTextarea.style.outlineColor="#9ec0f7";
					newTextarea.style.outlineWidth="2px";
				};
				newTextarea.onblur=function()
				{
					newTextarea.style.outlineStyle="none";
				};
				newDIV.appendChild(newLabel);
				newDIV.appendChild(newEmotionButton);
				newDIV.appendChild(newTextarea);
				newForm.appendChild(newDIV);
				
		 		newInput=document.createElement("input");
				newInput.type="hidden";
				newInput.name="comment_post_ID";
				newInput.value=postID;
				newForm.appendChild(newInput);
				
				newInput=document.createElement("input");
				newInput.type="hidden";
				newInput.name="comment_parent";
				newInput.value=commentID;
				newForm.appendChild(newInput);
				
				newInput=document.createElement("input");
				newInput.type="submit";
				newInput.name="submit";
				newInput.value="Submit";
				newInput.className="reply-submit"
				newForm.appendChild(newInput);
				
				containerDIV.appendChild(newForm);
				containerDIV.scrollIntoView();
				lastCommentID=commentID;
		}
	}
	else
	{
		var containerDIV=document.getElementById("comment-"+commentID);
		var newForm=document.createElement("form");
		var newDIV=null;
		var newInput=null;
		var newEmotionButton=null;
		var newEmotionButtonImg=null;
		var newEmotionContent=null;
			newForm.action=postURL;
			newForm.method="post";
			newForm.onsubmit=function()
			{
				var author=newForm.querySelector(".author");
				var email=newForm.querySelector(".email");
				if (author.value=="")
				{
					alert("Please input Username");
					if (author.style.outlineStyle!="solid")
					{
						author.style.outlineStyle="solid";
						author.style.outlineColor="#f00";
						author.style.outlineWidth="1px";
						author.style.backgroundColor="#fbdcdc";
						newForm.querySelector(".warning-author").style.visibility="visible";
					}
					if (email.value=="" && email.style.outlineStyle!="solid")
					{
						email.style.outlineStyle="solid";
						email.style.outlineColor="#f00";
						email.style.outlineWidth="1px";
						email.style.backgroundColor="#fbdcdc";
						newForm.querySelector(".warning-email").style.visibility="visible";
				
					}
					return false;
				}
				else if (email.value=="")
				{
					alert("Please input Email");
					if (email.style.outlineStyle!="solid")
					{
						email.style.outlineStyle="solid";
						email.style.outlineColor="#f00";
						email.style.outlineWidth="1px";
						email.style.backgroundColor="#fbdcdc";
						newForm.querySelector(".warning-email").style.visibility="visible";
					}
					return false;
				}
				return true;	
			}
				
			newDIV=createFormElement("Username*:","author",author_name,commentID);
			newForm.appendChild(newDIV);
		
			newDIV=createFormElement("Email*:","email",author_email,commentID);
			newForm.appendChild(newDIV);
		
			newDIV=createFormElement("Site:","url",author_url,commentID);
			newForm.appendChild(newDIV);
		
		
			newDIV=document.createElement("div");
			newLabel=document.createElement("label");
			newEmotionButton=document.createElement("button");
			newEmotionButtonImg=document.createElement("div");
			newTextarea=document.createElement("textarea");
			newDIV.className="input-content";
			newDIV.style.marginLeft="45px";
			newLabel.for="comment";
			newLabel.appendChild(document.createTextNode("Comments:"));
			newEmotionButton.name="emotion_button";
			newEmotionButton.type="button";
			newEmotionButton.className="reply-emotion";
			newEmotionButton.onclick=function()
			{
				newEmotionContent=document.getElementById("reply-emotion-content-"+commentID);
				if (showReplyEmotionContent)
				{
					showReplyEmotionContent=false;
					newEmotionButton.className="reply-emotion-hover";
					newEmotionContent.style.display="block";
					document.body.addEventListener("click",hideReplyEmotion,false);	
				}
				else
				{
					showReplyEmotionContent=true;
					newEmotionButton.className="reply-emotion";
					newEmotionContent.style.display="none";
					document.body.removeEventListener("click",hideReplyEmotion,false);		
				}
			};
			newEmotionButtonImg.className="reply-emotion-img";
			newEmotionButton.appendChild(newEmotionButtonImg);
			newTextarea.name="comment";
			newTextarea.id="commentText-"+commentID;
			newTextarea.style.backgroundColor="#fff";
			newTextarea.style.width="90%";
			newTextarea.onfocus=function(){
				newTextarea.style.outlineStyle="solid";
				newTextarea.style.outlineColor="#9ec0f7";
				newTextarea.style.outlineWidth="2px";
			};
			newTextarea.onblur=function()
			{
				newTextarea.style.outlineStyle="none";
			};

			newDIV.appendChild(newLabel);
			newDIV.appendChild(newEmotionButton);
			newDIV.appendChild(newTextarea);
			newForm.appendChild(newDIV);
			
	 		newInput=document.createElement("input");
			newInput.type="hidden";
			newInput.name="comment_post_ID";
			newInput.value=postID;
			newForm.appendChild(newInput);
			
			newInput=document.createElement("input");
			newInput.type="hidden";
			newInput.name="comment_parent";
			newInput.value=commentID;
			newForm.appendChild(newInput);
			
			newInput=document.createElement("input");
			newInput.type="submit";
			newInput.name="submit";
			newInput.value="Submit";
			newInput.className="reply-submit"
			newForm.appendChild(newInput);
			
			containerDIV.appendChild(newForm);
			containerDIV.scrollIntoView();
			lastCommentID=commentID;
	}
}

function createFormElement(labelTextNote,inputName,inputValue,commentID)
{
	var newDIV=document.createElement("div");
	var newLabel=document.createElement("label");
	var newInput=document.createElement("input");
	var warningTextAuthor=document.createElement("span");
	var warningTextEmail=document.createElement("span");
		newDIV.className="input-content";
		newDIV.style.marginLeft="45px";
		newLabel.for=inputName;
		newLabel.appendChild(document.createTextNode(labelTextNote));
		newInput.type="text";
		newInput.className=inputName;
		newInput.name=inputName;
		newInput.value=inputValue;
		newInput.style.backgroundColor="#fff";
		newInput.onfocus=function()
		{
				newInput.style.outlineStyle="solid";
				newInput.style.outlineColor="#9ec0f7";
				newInput.style.outlineWidth="2px";
				if (inputName=="author")
				{
					warningTextAuthor.style.visibility="hidden";
				}
				else if (inputName=="email")
				{
					warningTextEmail.style.visibility="hidden";
				}
		};
		newInput.onblur=function()
		{
			newInput.style.outlineStyle="none";
			if (newInput.value=="" && (inputName=="author" || inputName=="email"))
			{
					newInput.style.outlineStyle="solid";
					newInput.style.outlineColor="#f00";
					newInput.style.outlineWidth="1px";
					newInput.style.backgroundColor="#fbdcdc";
					if (inputName=="author")
					{
						warningTextAuthor.style.visibility="visible";
					}
					else
					{
						warningTextEmail.style.visibility="visible";
					}
			}
		};
		newDIV.appendChild(newLabel);
		newDIV.appendChild(newInput);
		if (inputName=="author")
		{
			warningTextAuthor.className="warning-author";
			warningTextAuthor.appendChild(document.createTextNode("Please input Username"));
			newDIV.appendChild(warningTextAuthor);
		}
		else if (inputName=="email")
		{
			warningTextAuthor.className="warning-email";
			warningTextEmail.appendChild(document.createTextNode("Please input Email"));
			newDIV.appendChild(warningTextEmail);
		}
	return newDIV;
}

function moveIcon(obj)
{
	function increaseAngle()
	{
		angle+=rotateAngle;
		if (angle<0.7 && angle > -0.7)
		{
			rotateNum++;
		}
		obj.style.transform="rotate("+angle+"deg)";
		if (angle<7)
		{
			increaseTimeoutID=setTimeout(increaseAngle,15);
		}	
		else
		{
			decreaseTimeoutID=setTimeout(decreaseAngle,15);
		}
		if (rotateNum==8)
		{
			clearTimeout(increaseTimeoutID);
			clearTimeout(decreaseTimeoutID);
			obj.style.transform="rotate(0deg)";
		}
	}
		
	function decreaseAngle()	
	{
		angle-=rotateAngle;
		if (angle<0.7 && angle > -0.7)
		{
			rotateNum++;
		}
		obj.style.transform="rotate("+angle+"deg)";
		if (angle > -7)
		{
			decreaseTimeoutID=setTimeout(decreaseAngle,15);
		}
		else
		{
			increaseTimeoutID=setTimeout(increaseAngle,15);
		}
		if (rotateNum==8)
		{
			clearTimeout(increaseTimeoutID);
			clearTimeout(decreaseTimeoutID);
			obj.style.transform="rotate(0deg)";
		}
	}
	increaseTimeoutID=setTimeout(increaseAngle,15);
}

function cancelMoveIcon(obj)
{
	clearTimeout(increaseTimeoutID);
	clearTimeout(decreaseTimeoutID);
	rotateNum=0;
	obj.style.transform="rotate(0deg)";
}

function showList(obj,add)
{
	var list=document.getElementById("side");
		if (displayList)
		{
			obj.style.backgroundImage="url("+add+"/images/cancel_show_list.png)";
			cancelChooseListImg=add;
			obj.style.width="15px";
			obj.style.height="15px";
			obj.style.marginTop="-63px";
			obj.style.marginRight="25px";
			listDisplayTime=0;
			displayList=false;
			list.style.display="block";
			function increasePosition()
			{
				list.style.top=listPosition+"px";
				listPosition+=(2*(2*listDisplayTime+0.7));
				listDisplayTime+=0.7;
				if (listPosition < 73)
				{
					setTimeout(increasePosition,15);
				}
				else
				{
					list.style.top="73px";
					listPosition=73;
				}
			}
			setTimeout(increasePosition,15);
		}
		else
		{
			obj.style.backgroundImage="url("+add+"/images/list.png)";
			obj.style.width="27px";
			obj.style.height="20px";
			obj.style.marginTop="-65px";
			obj.style.marginRight="20px";
			listDisplayTime=0;
			displayList=true;
			function decreasePosition()
			{
				list.style.top=listPosition+"px";
				listPosition-=(2*(2*listDisplayTime+0.7));
				listDisplayTime+=0.7;
				if (listPosition > (-170-increaseListLengthDoc))
				{
					setTimeout(decreasePosition,15);
				}
				else
				{
					list.style.display="none";
					listPosition=-170-increaseListLengthDoc;
				}
			}
			setTimeout(decreasePosition,15);
		
		}
}

function chooseList(obj,add)
{
	if (displayList)
	{
		obj.style.backgroundImage="url("+add+")";
		obj.style.width="32px";
		obj.style.height="26px";
		obj.style.marginTop="-68px";
		obj.style.marginRight="18px";
	}
}

function unChooseList(obj,add)
{
	if (displayList)
	{
		obj.style.backgroundImage="url("+add+")";
		obj.style.width="27px";
		obj.style.height="20px";
		obj.style.marginTop="-65px";
		obj.style.marginRight="20px";
	}
}

window.onscroll=function()
{
	var list=null;
		if (list=document.getElementById("side"))
		{
	 		if (document.documentElement.scrollTop!=0)
			{
				ableScrollTop=true;
			}
			if (ableScrollTop)
			{
				scrollTop=document.documentElement.scrollTop;
				scrollLeft=document.documentElement.scrollLeft;
				maxScrollHeight=73;
				increaseListLength=increaseListLengthDoc;
				increaseScrollLength=increaseScrollLengthDoc;
			}
			else
			{
				maxScrollHeight=85;
				increaseListLength=increaseListLengthUnDoc;
				increaseScrollLength=increaseScrollLengthUnDoc;
				scrollTop=document.body.scrollTop;
				scrollLeft=document.body.scrollLeft;
			}
			if ((scrollTop >= (115+increaseScrollLength)) && (displayList==false))
			{
				if (ableScrollTop==false)
				{
					clearTimeout(increaseListTimeoutID);
					clearTimeout(decreaseListTimeoutID);
				}
				list.style.top=(-228+maxScrollHeight-increaseListLength)+"px";
				listPosition=maxScrollHeight-scrollTop;
				if (scrollLeft > 0)
				{
					list.style.marginLeft=(-scrollLeft)+"px";
				}
				if (lastScrollTop < (115+increaseScrollLength))
				{
				    cancelChooseList.style.backgroundImage="url("+cancelChooseListImg+"/images/cancel_show_list.png)";
					cancelChooseList.style.cssFloat="right";
					cancelChooseList.style.width="15px";
					cancelChooseList.style.height="15px";
					cancelChooseList.style.marginTop="-17px";
					cancelChooseList.style.marginRight="25px";
					cancelChooseList.style.cursor="pointer";
					cancelChooseList.onclick=function()
					{
						list.style.top="-170px";
						list.style.display="none";
						displayList=true;
						var listIcon=document.getElementById("categories");
						listIcon.style.backgroundImage="url("+cancelChooseListImg+"/images/list.png)";
						listIcon.style.width="27px";
						listIcon.style.height="20px";
						listIcon.style.marginTop="-65px";
						listIcon.style.marginRight="20px";
						list.removeChild(cancelChooseList);
					}
					list.appendChild(cancelChooseList);
				}
			}
			else if ((scrollTop < (115+increaseScrollLength)) && (displayList==false))
			{
				if (scrollLeft > 0)
				{
					list.style.marginLeft=(-scrollLeft)+"px";
				}
				if (scrollTop < 0)
				{
					list.style.top=(73-scrollTop)+"px";
					listPosition=73;
					clearTimeout(increaseListTimeoutID);
					clearTimeout(decreaseListTimeoutID);
					return;
				}
				if (lastScrollTop >=(115+increaseScrollLength))
				{
					list.removeChild(cancelChooseList);
				}
				function increasePosition()
				{
					list.style.top=(listPosition-scrollTop)+"px";
					listPosition+=3;
					if (listPosition < (73-scrollTop*2))
					{
						increaseListTimeoutID=setTimeout(increasePosition,6);
					}
					else
					{
						list.style.top=(73-scrollTop*2)+"px";
						listPosition=73-scrollTop;
					}
				}
				function decreasePosition()
				{
					list.style.top=(listPosition-scrollTop)+"px";
					listPosition-=3;
					if (scrollTop<=12)
					{
						maxScrollHeight=73;
					}
					else
					{
						maxScrollHeight=85;
					}
					if (listPosition>(maxScrollHeight-scrollTop))
					{
						decreaseListTimeoutID=setTimeout(decreasePosition,6);
					}
					else
					{
						list.style.top=(maxScrollHeight-scrollTop*2)+"px";
						listPosition=maxScrollHeight-scrollTop;
					}
				}
				if (lastScrollTop <= scrollTop)
				{
					list.style.top=(listPosition-scrollTop)+"px";
					decreaseListTimeoutID=setTimeout(decreasePosition,6);
				}
				else
				{
					if (ableScrollTop)
					{
						list.style.top=(listPosition-scrollTop)+"px";
					}
					else
					{
						if (lastScrollTop >= (115+increaseScrollLength))
						{
							list.style.top=(-35-increaseScrollLength-scrollTop)+"px";
							listPosition=-35-increaseScrollLength;
						}
						else
						{
							list.style.top=(listPosition-scrollTop)+"px";
						}
					}
					increaseListTimeoutID=setTimeout(increasePosition,6);
				}
			}
			lastScrollTop=scrollTop;
		}
		else if (list=document.getElementById("single-side"))
		{
			if (document.documentElement.scrollTop!=0)
			{
				ableScrollTop=true;
			}
			if (ableScrollTop)
			{
				scrollTop=document.documentElement.scrollTop;
				scrollLeft=document.documentElement.scrollLeft;
				maxScrollHeight=73;
				increaseListLength=increaseListLengthDoc;
				increaseScrollLength=increaseScrollLengthDoc;
			}
			else
			{
				maxScrollHeight=85;
				increaseListLength=increaseListLengthUnDoc;
				increaseScrollLength=increaseScrollLengthUnDoc;
				scrollTop=document.body.scrollTop;
				scrollLeft=document.body.scrollLeft;
			}
			if ((scrollTop >= (103+increaseScrollLength)) && (displayList==false))
			{
				if (ableScrollTop==false)
				{
					clearTimeout(increaseListTimeoutID);
					clearTimeout(decreaseListTimeoutID);
				}
				list.style.top=(-288+maxScrollHeight-increaseListLength)+"px";
				singleListPosition=-scrollTop;
				if (scrollLeft > 0)
				{
					list.style.marginLeft=(-scrollLeft)+"px";
				}
				if (lastScrollTop < (103+increaseScrollLength))
				{
				    cancelChooseList.style.backgroundImage="url("+cancelChooseListImg+"/images/single_cancel_show_list.png)";
					cancelChooseList.style.cssFloat="right";
					cancelChooseList.style.width="15px";
					cancelChooseList.style.height="15px";
					cancelChooseList.style.marginTop="-17px";
					cancelChooseList.style.marginRight="25px";
					cancelChooseList.style.cursor="pointer";
					cancelChooseList.onclick=function()
					{
						list.style.top="-250px";
						list.style.display="none";
						displayList=true;
						var listIcon=document.getElementById("single-categories");
						listIcon.style.backgroundImage="url("+cancelChooseListImg+"/images/single-list.png)";
						listIcon.style.width="27px";
						listIcon.style.height="20px";
						listIcon.style.marginTop="-38px";
						listIcon.style.marginRight="20px";
						list.removeChild(cancelChooseList);
					}
					list.appendChild(cancelChooseList);
				}
			}
			else if ((scrollTop < (103+increaseScrollLength)) && (displayList==false))
			{
				if (scrollLeft > 0)
				{
					list.style.marginLeft=(-scrollLeft)+"px";
				}
				if (scrollTop < 0)
				{
					clearTimeout(increaseListTimeoutID);
					clearTimeout(decreaseListTimeoutID);
					list.style.top="0";
					singleListPosition=0;
					return;
				}
				if (lastScrollTop >=(103+increaseScrollLength))
				{
					list.removeChild(cancelChooseList);
				}
				function increaseSinglePosition()
				{
					list.style.top=(singleListPosition-scrollTop)+"px";
					singleListPosition+=3;
					if (singleListPosition < (-scrollTop))
					{
						increaseListTimeoutID=setTimeout(increaseSinglePosition,6);
					}
					else
					{
						list.style.top=(-scrollTop*2)+"px";
						singleListPosition=-scrollTop;
					}
				}
				function decreaseSinglePosition()
				{
					list.style.top=(singleListPosition-scrollTop)+"px";
					singleListPosition-=3;
					if (scrollTop<=12)
					{
						maxScrollHeight=73;
					}
					else
					{
						maxScrollHeight=85;
					}
					if (singleListPosition>(-scrollTop))
					{
						decreaseListTimeoutID=setTimeout(decreaseSinglePosition,6);
					}
					else
					{
						list.style.top=-(scrollTop*2)+"px";
						singleListPosition=-scrollTop;
					}
				}
				if (lastScrollTop <= scrollTop)
				{
					list.style.top=(singleListPosition-scrollTop)+"px";
					decreaseListTimeoutID=setTimeout(decreaseSinglePosition,6);
				}
				else
				{
					if (ableScrollTop)
					{
						list.style.top=(singleListPosition-scrollTop)+"px";
					}
					else
					{
						if (lastScrollTop >= (103+increaseScrollLength))
						{
							list.style.top=(-107-increaseScrollLength-scrollTop)+"px";
							singleListPosition=-107-increaseScrollLength;
						}
						else
						{
							list.style.top=(singleListPosition-scrollTop)+"px";
						}
					}
					increaseListTimeoutID=setTimeout(increaseSinglePosition,6);
				}
			}
			lastScrollTop=scrollTop;
		}
}

window.onload = function()
{
	var footerStyle = document.getElementById("footer");
	if (document.documentElement)
	{
		if (document.documentElement.clientHeight > 1100)
		{
			footerStyle.style.position = "absolute";
			footerStyle.style.bottom = "0";
		}
		else
		{
			footerStyle.style.position = "relative";
		}
	}
	else
	{
		if (document.body.clientHeight > 1100)
		{
			footerStyle.style.postion = "absolute";
			footerStyle.style.bottom = "0";
		}
		else
		{
			footerStyle.style.position = "relative";
		}
	}
}

window.onresize=function()
{
	if (scrollLeft!=0)
	{
		var list=document.getElementById("side") ? document.getElementById("side") : document.getElementById("single-side");
			list.style.marginLeft="0";
	}
		
	var footerStyle = document.getElementById("footer");
	if (document.documentElement)
	{
		if (document.documentElement.clientHeight > 1100)
		{
			footerStyle.style.position = "absolute";
			footerStyle.style.bottom = "0";
		}
		else
		{
			footerStyle.style.position = "relative";
		}
	}
	else
	{
		if (document.body.clientHeight > 1100)
		{
			footerStyle.style.postion = "absolute";
			footerStyle.style.bottom = "0";
		}
		else
		{
			footerStyle.style.position = "relative";
		}
	}
}

function showChildUl()
{
	var obj=document.getElementById("ul-img");
	var childUl=document.getElementById("child-ul");
		if (showChildList)
		{
			childUl.style.display="block";
			increaseListLengthDoc=68;
			increaseScrollLengthDoc=37;
			increaseListLengthUnDoc=65;
			increaseScrollLengthUnDoc=35;
			obj.src=cancelChooseListImg+"/images/close_child_categories.png";
			showChildList=false;
		}
		else
		{
			var childChildUl=document.getElementsByClassName("child-child-ul");
			var childUlImg1=document.getElementById("child-ul-img1");
			var childUlImg2=document.getElementById("child-ul-img2");
				childUl.style.display="none";
				childChildUl[0].style.display="none";
				childChildUl[1].style.display="none";	
				increaseListLengthDoc=0;
				increaseScrollLengthDoc=0;
				increaseListLengthUnDoc=0;
				increaseScrollLengthUnDoc=0;
				obj.src=cancelChooseListImg+"/images/child_categories.png";
				childUlImg1.src=cancelChooseListImg+"/images/child_categories.png";
				childUlImg2.src=cancelChooseListImg+"/images/child_categories.png";
				showChildChildListFir=true;
				showChildChildListSec=true;
				showChildList=true;
		}
}

function showChildChildUl(num)
{
	var obj=document.getElementById("child-ul-img"+(num+1));
	var childChildUl=document.getElementsByClassName("child-child-ul")[num];
		if (num==0)
		{
			if (showChildChildListFir==true)
			{
				increaseListLengthDoc+=75;
				increaseScrollLengthDoc+=40;
				increaseListLengthUnDoc+=66;
				increaseScrollLengthUnDoc+=30;
				obj.src=cancelChooseListImg+"/images/close_child_categories.png";
				childChildUl.style.display="block";
				showChildChildListFir=false;
			}
			else
			{
				increaseListLengthDoc-=75;
				increaseScrollLengthDoc-=40;
				increaseListLengthUnDoc-=66;
				increaseScrollLengthUnDoc-=30;
				obj.src=cancelChooseListImg+"/images/child_categories.png";
				childChildUl.style.display="none";
				showChildChildListFir=true;
			}
		}
		else
		{
			if (showChildChildListSec==true)
			{
				increaseListLengthDoc+=71;
				increaseScrollLengthDoc+=35;
				increaseListLengthUnDoc+=64;
				increaseScrollLengthUnDoc+=30;
				obj.src=cancelChooseListImg+"/images/close_child_categories.png";
				childChildUl.style.display="block";
				showChildChildListSec=false;
			}
			else
			{
				increaseListLengthDoc-=71;
				increaseScrollLengthDoc-=35;
				increaseListLengthUnDoc-=64;
				increaseScrollLengthUnDoc-=30;
				obj.src=cancelChooseListImg+"/images/child_categories.png";
				childChildUl.style.display="none";
				showChildChildListSec=true;
			}
		}
		clickChildChildList=true;
}

function childUlOver()
{
	var obj=document.getElementById("ul-img");
		if (showChildList)
		{
			obj.src=cancelChooseListImg+"/images/child_categories_hover.png";
		}
		else
		{
			obj.src=cancelChooseListImg+"/images/close_child_categories_hover.png";
		}
}

function childUlOut()
{
	var obj=document.getElementById("ul-img");
		if (showChildList)
		{
			obj.src=cancelChooseListImg+"/images/child_categories.png";
		}
		else
		{
			obj.src=cancelChooseListImg+"/images/close_child_categories.png";
		}
}

function childChildUlOver(num)
{
	var obj=document.getElementById("child-ul-img"+(num+1));
		if (num==0)
		{
			if (showChildChildListFir)
			{
				obj.src=cancelChooseListImg+"/images/child_categories_hover.png";
			}
			else
			{
				obj.src=cancelChooseListImg+"/images/close_child_categories_hover.png";
			}
		}
		else
		{
			if (showChildChildListSec)
			{
				obj.src=cancelChooseListImg+"/images/child_categories_hover.png";
			}
			else
			{
				obj.src=cancelChooseListImg+"/images/close_child_categories_hover.png";
			}
		}
}

function childChildUlOut(num)
{
	var obj=document.getElementById("child-ul-img"+(num+1));
		if (num==0)
		{
			if (showChildChildListFir)
			{
				obj.src=cancelChooseListImg+"/images/child_categories.png";
			}
			else
			{
				obj.src=cancelChooseListImg+"/images/close_child_categories.png";
			}
		}
		else
		{
			if (showChildChildListSec)
			{
				obj.src=cancelChooseListImg+"/images/child_categories.png";
			}
			else
			{
				obj.src=cancelChooseListImg+"/images/close_child_categories.png";
			}
		}
}

function showSingleList(obj,add)
{
	var list=document.getElementById("single-side");
		list.style.display="block";
		list.style.top=singleListPosition+"px";
		if (scrollLeft!=0)
		{
			list.style.marginLeft=(-scrollLeft)+"px";
		}
		obj.style.backgroundImage="url("+add+"/images/click_single_cancel_show_list.png)";
		obj.style.width="15px";
		obj.style.height="15px";
		obj.style.marginTop="-35px";
		obj.style.marginRight="24px";
		cancelChooseListImg=add;
		listDisplayTime=0;
		displayList=false;
		function increasePosition()
		{
			list.style.top=singleListPosition+"px";
			singleListPosition+=(1*(2*listDisplayTime+0.7));
			listDisplayTime+=0.7;
			if (singleListPosition < 0)
			{
				setTimeout(increasePosition,15);
			}
			else
			{
				list.style.top="0px";
				singleListPosition=0;
			}
		}
		setTimeout(increasePosition,15);
}

function unShowSingleList()
{
	var list=document.getElementById("single-side");
	var obj=document.getElementById("single-categories");
		listDisplayTime=0;
		displayList=true;
		function decreasePosition()
		{
			list.style.top=singleListPosition+"px";
			singleListPosition-=(1*(2*listDisplayTime+0.7));
			listDisplayTime+=0.7;
			if (singleListPosition > (-250-increaseListLengthDoc))
			{
				setTimeout(decreasePosition,15);
			}
			else
			{
				list.style.display="none";
				singleListPosition=-250-increaseListLengthDoc;
				obj.style.backgroundImage="url("+cancelChooseListImg+"/images/single-list.png)";
				obj.style.width="27px";
				obj.style.height="20px";
				obj.style.marginTop="-38px";
				obj.style.marginRight="20px";
			}
		}
		setTimeout(decreasePosition,15);
}

function grin(tag) 
{
    var myField;
    	tag = ' ' + tag + ' ';
        if (document.getElementById('comment') && document.getElementById('comment').type == 'textarea') 
		{
    		myField = document.getElementById('comment');
    	} 
		else 
		{
    		return false;
    	}
    	if (document.selection) 
		{
    		myField.focus();
    		sel = document.selection.createRange();
    		sel.text = tag;
    		myField.focus();
    	}
    	else if (myField.selectionStart || myField.selectionStart == '0') 
		{
    		var startPos = myField.selectionStart;
    		var endPos = myField.selectionEnd;
    		var cursorPos = endPos;
    		myField.value = myField.value.substring(0, startPos)
    					  + tag
    					  + myField.value.substring(endPos, myField.value.length);
    		cursorPos += tag.length;
    		myField.focus();
    		myField.selectionStart = cursorPos;
    		myField.selectionEnd = cursorPos;
    	}
    	else 
		{
    		myField.value += tag;
    		myField.focus();
    	}
}

function replyGrin(tag,commentID) 
{
    var myField;
    	tag = ' ' + tag + ' ';
        if (document.getElementById('commentText-'+commentID) && document.getElementById('commentText-'+commentID).type == 'textarea') 
		{
    		myField = document.getElementById('commentText-'+commentID);
    	} 
		else 
		{
    		return false;
    	}
    	if (document.selection) 
		{
    		myField.focus();
    		sel = document.selection.createRange();
    		sel.text = tag;
    		myField.focus();
    	}
    	else if (myField.selectionStart || myField.selectionStart == '0') 
		{
    		var startPos = myField.selectionStart;
    		var endPos = myField.selectionEnd;
    		var cursorPos = endPos;
    		myField.value = myField.value.substring(0, startPos)
    					  + tag
    					  + myField.value.substring(endPos, myField.value.length);
    		cursorPos += tag.length;
    		myField.focus();
    		myField.selectionStart = cursorPos;
    		myField.selectionEnd = cursorPos;
    	}
    	else 
		{
    		myField.value += tag;
    		myField.focus();
    	}		
}

var hideEmotion=function(event)
{
	var emotionContent=document.getElementById("emotion-content");
	event = event ? event : window.event;
	var obj= event.srcElement ? event.srcElement : event.target;
		if ((obj.id!="emotion") && (obj.id!="emotion-content"))
		{	
			showEmotionContent=true;
			emotionContent.style.display="none";
			document.body.removeEventListener("click",hideEmotion,false);	
		}			
}

var hideReplyEmotion=function(event)
{
	var replyEmotionContent=document.getElementsByClassName("reply-emotion-content");
	var replyEmotionButton=null;
	event = event ? event : window.event;
	var obj= event.srcElement ? event.srcElement : event.target;
		if ((obj.className!="reply-emotion-hover") && (obj.className!="reply-emotion-img") && (obj.className!="reply-emotion-content"))
		{
			if (replyEmotionButton=document.getElementsByClassName("reply-emotion-hover")[0])
			{
				replyEmotionButton.className="reply-emotion";
			}
			showReplyEmotionContent=true;
			for (var pos in replyEmotionContent)
			{
				replyEmotionContent[pos].style.display="none";
			}
			document.body.removeEventListener("click",hideReplyEmotion,false);	
		}
}


function showEmotion()
{
	var emotionContent=document.getElementById("emotion-content");
		if (showEmotionContent)
		{
			showEmotionContent=false;
			emotionContent.style.display="block";
			document.body.addEventListener("click",hideEmotion,false);	
		}
		else
		{
			showEmotionContent=true;
			emotionContent.style.display="none";
			document.body.removeEventListener("click",hideEmotion,false);		
		}
}