import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
    return (
        <Box
            flex={2}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position={'fixed'} width={350}>
                <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
                <AvatarGroup max={9}>
                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    <Avatar alt="Agnes Walker" src="" />
                    <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                    <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80" />
                    <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                    <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                    <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80" />
                    <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                </AvatarGroup>

                <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Recently Posted</Typography>
                <ImageList variant="masonry" cols={4} gap={5}>
                    <ImageListItem>
                        <img
                            src='https://images.pexels.com/photos/3889753/pexels-photo-3889753.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            loading='lazy'
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src='https://images.pexels.com/photos/6181092/pexels-photo-6181092.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            loading='lazy'
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src='https://images.pexels.com/photos/4413762/pexels-photo-4413762.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            loading='lazy'
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src='https://images.pexels.com/photos/2101528/pexels-photo-2101528.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            loading='lazy'
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src='https://images.pexels.com/photos/4436363/pexels-photo-4436363.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            loading='lazy'
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src='https://images.pexels.com/photos/1191090/pexels-photo-1191090.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            loading='lazy'
                        />
                    </ImageListItem>
                </ImageList>

                <Typography variant='h6' fontWeight={100} mt={2} >Latest Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Kiara Advani" src="https://wikiandbio.com/wp-content/uploads/2019/06/Kiara-Advani-Photo.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Dinner this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Kiara
                                    </Typography>
                                    {" — Are you free tomorrow, Can we have dinner together?"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="SRK" src="https://filmfare.wwmindia.com/content/2020/jun/shahrukhkhan41593060419.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Sharukh Bhai"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Akash, Allu Arjun, +5more
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town bhailog..."}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="kriti" src="https://assets.vogue.in/photos/6409d2299d73a356319b4598/2:3/w_2560%2Cc_limit/IMG_2947.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Hey long time no see..."
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Kriti Sanon
                                    </Typography>
                                    {' — Do you have any promotion activity today?'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>

            </Box>
        </Box>
    )
}

export default Rightbar