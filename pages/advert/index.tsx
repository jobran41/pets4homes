
const Advert = () => {
    return (
    

        
        <div class="container white-body">



            <div class="col-xs-12">
            <div class="row">
            <div class="inner-div10">
            <h1>Create Pets4Homes Profile Page</h1>
            <hr />
            <p>This information is used to create your own public Pets4Homes profile page. The profile name and photo will be displayed on all your adverts and is important so that our users can know a little about you. Users with completed profiles and photos are more likely to get a higher response to their adverts.</p>
            <br><br>
            <form action="" method="post">
            <div class="row">
            <div class="col-xs-12 col-sm-6 col-sm-offset-0 col-md-6 col-md-offset-0 col-lg-6  col-lg-offset-0">
            <div class="form-group">
            <label>Profile Name/Title</label>
            <input type="text" name="profile_name" class="form-control input-lg" data-toggle="tooltip" title="" maxlength="45" value="" data-original-title="Please enter your profile name/title. This could be your breeders name or just a nick name.  It will be displayed on your adverts and in search results instead of your first name.  It must be between 5 and 45 characters long."> <p class="error">&nbsp;</p> </div>
            <div class="form-group">
            <label>About Me</label>
            <textarea name="profile_description" class="form-control input-lg" rows="5" data-toggle="tooltip" title="" id="description" data-original-title="Please enter some information about yourself, or if your a breeder, then details about your breeding experience."></textarea>
            <p class="error">&nbsp;</p> </div>
            <div class="form-group">
            <label>Website Address</label>
            <input type="text" name="website_address" class="form-control input-lg" data-toggle="tooltip" title="" placeholder="e.g. https://www.yourwebsite.co.uk" maxlength="60" value="" data-original-title="Please enter your website address starting with http:// or https://"> <p class="error">&nbsp;</p> </div>
            <div class="form-group">
            <div class="panel panel-default">
            <div class="panel-heading"><label>Pets4Homes Profile Page Name/URL</label></div>
            <div class="panel-body">
            <input type="text" name="user_name" id="username" class="form-control input-lg" data-toggle="tooltip" title="" maxlength="35" value="" data-original-title="Please enter your unique pets4homes profile page name. This could be your breeders name or just a unique name for your profile page.  It must be between 5 and 35 characters long with no spaces."> <p class="error">&nbsp;</p>
            <b>Example Profile URL</b><br>https://www.pets4homes.co.uk/users/<span id="previewurl">yourusername</span>
            </div>
            </div>
            </div>
            <br>
            <div class="form-group">
            <label>Profile Photo</label>
            <div class="dropdown"> <a class="dropdown-toggle" data-toggle="dropdown"> <div class="img-overlay" style="position: relative; max-width: 200px;"> <img src="/images/pets4homes-avatar.jpg?ver=new" class="img-circle" style="display:block;" width="200" height="200" id="avatarround" data-toggle="dropdown"> <div class="project-overlay img-circle" style="position: absolute;top: 0;left: 0; width: 100%;height: 100%;background-color: rgba(0,0,0,0.3);color: #fff;cursor: pointer; cursor: hand; "> <div class="text-center" style="margin-top:35%;padding: 0%;padding: 0%; font-size: 18px;"><i class="fa fa-picture-o fa-2x"></i><br><b>Edit Photo</b> </div> </div> </div> </a><ul class="dropdown-menu" style="left:20px; top:140px;"><a class="dropdown-toggle" data-toggle="dropdown"> </a><li><a class="dropdown-toggle" data-toggle="dropdown"></a><a class="btn-file">Upload Photo <input id="uploadavatar" type="file" name="uploadavatar"></a></li> <li id="croplink" class="disabled"><a href="#" class="opencropimage" data-toggle="" data-target="#cropimage" data-imageurl="/images/users/1883/1883772/logos/logo-original.jpg">Crop Photo</a></li> <li id="deletelink" class="disabled"><a href="#" id="deleteimage">Delete Photo</a></li> <li class="divider"></li> <li><a data-toggle="dropdown" style="cursor: pointer; cursor: hand;">Cancel</a></li> </ul></div>
            </div>
            <div id="totalprogress" class="progress" style="display:none;">
            <div class="progress-bar bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em;">0%</div>
            </div>
            <div id="uploaderrormessage" class="alert" style="display:block;"></div>
            <div id="profile_dsp_emailDiv">
            <label for="profile_dsp_email">Display 'Email Us' Button on Profile ? *</label>
            <div class="btn-group btn-group-justified" data-toggle="buttons" role="group" style="padding-top:5px;">
            <label class="btn btn-lg btn-orange">
            <input type="radio" name="profile_dsp_email" value="1"> Yes
            </label>
            <label class="btn btn-lg btn-orange active">
            <input type="radio" name="profile_dsp_email" value="0" checked="checked"> No
            </label>
            </div><p class="error">&nbsp;</p> </div>
            <div id="profile_dsp_phoneDiv">
            <label for="profile_dsp_phone">Display Phone Number on Profile ? *</label>
            <div class="btn-group btn-group-justified" data-toggle="buttons" role="group" style="padding-top:5px;">
            <label class="btn btn-lg btn-orange ">
            <input type="radio" name="profile_dsp_phone" value="1"> Yes
            </label>
            <label class="btn btn-lg btn-orange active">
            <input type="radio" name="profile_dsp_phone" value="0" checked="checked"> No
            </label>
            </div><p class="error">&nbsp;</p> </div>
            
            <div class="modal fade" id="cropimage" role="dialog">
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">×</button>
            <h4 class="modal-title">Crop Profile Photo</h4>
            </div>
            <div class="modal-body">
            <div class="crop-preview"><img src="" id="targetimage" class="img-responsive"></div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" id="saveimage" class="btn btn-orange">Save Image</button>
            </div>
            </div>
            </div>
            </div>
            <br><br>
            <button type="submit" class="btn btn-custom btn-lg btn-block" name="updateprofile" value="Update Profile">Update Profile</button>
            <input type="hidden" name="submitted" value="TRUE">
            <input type="hidden" name="form_token" value="5fdea23fb3c6e">
            <input type="hidden" name="logo" value="0">
            <input type="hidden" name="tmpurl" id="tmpurl" value=""><br>
            <input type="hidden" name="tmpwidth" id="tmpwidth" value=""><br>
            <input type="hidden" name="tmpheight" id="tmpheight" value=""><br>
            <input type="hidden" name="cropidhidden" id="cropidhiddenid" value="">
            <input type="hidden" name="imageurlhidden" id="imageurlhidden" value="">
            <input type="hidden" id="x" name="x" value="">
            <input type="hidden" id="y" name="y" value="">
            <input type="hidden" id="w" name="w" value="">
            <input type="hidden" id="h" name="h" value="">
            </div>
            </div>
            </form>
            </div>
            </div>
            </div>
            </div>
   
    </div>
    )
}

export default Advert