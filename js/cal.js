$(function () {			
                    $('a[data-toggle="collapse"]').on('click',function(){
				
				var objectID=$(this).attr('href');
				
				if($(objectID).hasClass('in'))
				{
                                    $(objectID).collapse('hide');
				}
				
				else{
                                    $(objectID).collapse('show');
				}
                    });
                    
                    
                    $('#expandAll').on('click',function(){
                        
                        $('a[data-toggle="collapse"]').each(function(){
                            var objectID=$(this).attr('href');
                            if($(objectID).hasClass('in')===false)
                            {
                                 $(objectID).collapse('show');
                            }
                        });
                    });
                    
                    $('#collapseAll').on('click',function(){
                        
                        $('a[data-toggle="collapse"]').each(function(){
                            var objectID=$(this).attr('href');
                            $(objectID).collapse('hide');
                        });
                    });
                    
		});