'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Avatar, Divider, IconButton, Link, ListItemIcon, Menu, MenuItem, Stack, Typography} from "@mui/material";
import Item from "@/app/components/common/Item";
import {DirectionsCaHouseOutlined, rOutlined, Diversity3, Logout, MenuOutlined, PersonAdd, Settings, DirectionsCarOutlined, HouseOutlined} from "@mui/icons-material";
import React, {useState} from "react";
import SideBar from "@/app/components/navigation/SideBar";
import {useRouter} from "next/navigation";
import { SideBarMenuGroupProps } from "./components/navigation/SideBarMenuGroup";

const inter = Inter({ subsets: ["latin"] });

const APPLICATION_VERSION = '0.0.1-a1';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const burgerOpen = Boolean(anchorEl);
  const router = useRouter();

  const carItems: SideBarMenuGroupProps = {
    label: 'APIs',
    items: [
      {
        icon: <DirectionsCarOutlined/>,
        label: 'Internal APIs',
        url: '/api/internal',
        info:
            <>
              <Typography>
                <b>Car Definitions</b>
                <p/>
                Car definitions is a database of car makes, models, years, and trims.
                This database is used to define the cars that are members of fleets, so the more
                information contained in this database, the better.
                <p/>
                You are encouraged to add more car information to this database to help fill out
                defined cars in your fleet.  Use sites like Consumer Reports&trade; and Car and Driver&trade;
                to help enrichen the car information.
                <p/>
                The data here will eventually help give more information about your cars in the
                dashboard, and will help show you depreciation schedules, comparisons with prices
                other people paid, etc.
              </Typography>
            </>
      },
      {
        icon: <HouseOutlined/>,
        label: 'External APIs',
        url: '/api/external',
        info:
            <>
              <Typography>
                <b>Delivery Addresses</b>
                <p/>
                These are sets of delivery destinations.  These include places like hotels, airports,
                off-airport parking lots, and such.
                <p/>
                You have the ability to share the addresses with other VURB users by selecting &quot;Public&quot;
                in the address lists.
                <p/>
                If you are adding an address that is intended for personal use, please do not mark it Public.
                <p/>
                You can add any address you like, but only you can add an address.  If the address is in use
                by another fleet, you cannot delete the address, but you can modify it.
              </Typography>
            </>
      },
    ],
  };
  const techDocsItems: SideBarMenuGroupProps = {
    label: 'Tech Docs',
    items: [
      {
        icon: <DirectionsCarOutlined/>,
        label: 'Home',
        url: '/techdocs',
        info:
            <>
              <Typography>
                <b>Car Definitions</b>
                <p/>
                Car definitions is a database of car makes, models, years, and trims.
                This database is used to define the cars that are members of fleets, so the more
                information contained in this database, the better.
                <p/>
                You are encouraged to add more car information to this database to help fill out
                defined cars in your fleet.  Use sites like Consumer Reports&trade; and Car and Driver&trade;
                to help enrichen the car information.
                <p/>
                The data here will eventually help give more information about your cars in the
                dashboard, and will help show you depreciation schedules, comparisons with prices
                other people paid, etc.
              </Typography>
            </>
      },
    ],
  };
  const sidebarItems = [carItems, techDocsItems];

  const handleBurgerMenu = (e: any) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const homeClicked = () => {
    router.push('/');
  }

  return (
    <html lang="en">
      <body className={inter.className}>
      <div style={{display: 'flex', width: '100%'}}>
        {/* Side Divider, only contains the sidebar, which is static.*/}
        <div style={{ width: '260px' }}>
          <SideBar width={260} sidebarItems={sidebarItems} onHomeClicked={homeClicked}/>
          {/*<SideBar width={260} sidebarItems={sidebarItems} onHomeClicked={handleHomeClicked}/>*/}
        </div>

        {/* Right side, top portion of the page, contains the top navigation bar. */}
        <div style={{
          position: 'fixed',
          paddingLeft: '10px',
          paddingRight: '0px',
          borderLeft: '1px solid rgb(35, 60, 82)',
          borderBottom: '1px solid rgb(35, 60, 82)',
          left: '0px',
          width: '100%',
          height: '46px',
          backgroundColor: 'rgb(5, 30, 52)',
          color: '#fff'
        }}>
          <Stack direction={'row'}>
            <Item sx={{
              width: '25%',
              paddingTop: '8px',
              backgroundColor: 'rgb(5, 30, 52)',
              height: '46px',
              textAlign: 'left'
            }}>
              <Typography fontWeight={'bold'} color={'white'} variant={'h5'}>
                <Diversity3 style={{ color: 'white' }}/> Archestration
              </Typography>
            </Item>

            <Item sx={{
              width: '50%',
              backgroundColor: 'rgb(5, 30, 52)',
              textAlign: 'center',
              color: '#fff',
              paddingTop: '12px'
            }}>
              <Typography>
                <Link href={'/'} underline={'none'} color={'#fff'}>Home</Link>
              </Typography>
            </Item>

            <Item sx={{
              width: '25%',
              backgroundColor: 'rgb(5, 30, 52)',
              textAlign: 'right',
              color: '#fff',
              paddingTop: '4px'
            }}>
              <IconButton onClick={handleBurgerMenu}>
                <MenuOutlined style={{color: 'white'}}/>
              </IconButton>
              <Menu id={'burger-menu'} open={burgerOpen} onClose={handleClose} onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&::before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    sx={{paddingTop: '15px', top: '15px'}}>
                <MenuItem onClick={handleClose}>
                  <Avatar/> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar/> My Account
                </MenuItem>
                <Divider/>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize={'small'}/>
                  </ListItemIcon>
                  Add/Invite Member
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize={'small'}/>
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize={'small'}/>
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Item>
          </Stack>
        </div>

        {/* Right side main container that displays all relevant content regarding the page that was selected */}
        <div style={{
          position: 'fixed',
          paddingLeft: '10px',
          paddingRight: '10px',
          paddingTop: '10px',
          left: '260px',
          top: '47px',
          width: 'calc(100% - 260px)',
          height: 'calc(100% - 48px)',
          backgroundColor: '#fff',
          color: '#000',
          overflowY: 'auto',
        }}>
          {/*{headerTitle().length > 0 && (*/}
          {/*    <Stack direction={'row'}>*/}
          {/*      <Item sx={{*/}
          {/*        paddingLeft: '15px',*/}
          {/*        width: '90%',*/}
          {/*        textAlign: 'left',*/}
          {/*        backgroundColor: '#000',*/}
          {/*        color: '#fff'*/}
          {/*      }}>*/}
          {/*        <Typography fontWeight={'bold'}>*/}
          {/*          {headerTitle()}*/}
          {/*        </Typography>*/}
          {/*      </Item>*/}
          {/*      <Item sx={{*/}
          {/*        paddingLeft: '15px',*/}
          {/*        width: '10%',*/}
          {/*        textAlign: 'right',*/}
          {/*        backgroundColor: '#000',*/}
          {/*        color: '#fff'*/}
          {/*      }}>*/}
          {/*        <IconButton style={{padding: '0px'}}*/}
          {/*                    onClick={() => alertDialog(headerInfo())}>*/}
          {/*          <InfoOutlined style={{color: 'white'}}/>*/}
          {/*        </IconButton>*/}
          {/*      </Item>*/}
          {/*    </Stack>*/}
          {/*)}*/}
          {children}
        </div>
      </div>

      <div style={{
        position: 'fixed',
        bottom: 0,
        width: '260px',
        height: '24px',
        backgroundColor: 'white',
        borderTop: '1px solid #000',
        borderRight: '1px solid #000'
      }}>
        <div style={{display: 'flex'}}>
          <div style={{width: '260px', paddingLeft: '10px', color: '#ccc', backgroundColor: 'rgb(55, 80, 102)'}}>
            <Typography>
              v{APPLICATION_VERSION}
            </Typography>
          </div>
        </div>
      </div>
      </body>
      </html>
  );
}
