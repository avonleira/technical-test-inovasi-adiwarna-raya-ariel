"use client";

// import Link from "next/link";
import { useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import { formatDayMonth } from "@/utils/dayjsConst";
import { intlNumberFormat } from "@/utils/intlNumberFormat";
import { Product } from "@/types/product";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

interface Props {
  product: Product;
  relativeDate?: boolean;
  equalHeight?: boolean;
}
export default function ProductCard({
  product,
  relativeDate = false,
  equalHeight = false,
}: Props) {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  if (!!product)
    return (
      <Box>
        <Card elevation={3} sx={{ height: equalHeight ? "100%" : undefined }}>
          <CardActionArea
            // LinkComponent={Link}
            // href={`/contents/${product.id}`}
            onClick={() => setOpenDialog(true)}
            sx={{ height: equalHeight ? "100%" : undefined }}
          >
            <CardMedia
              component="img"
              loading="lazy"
              src={product.umage_uri}
              height={upMd ? 200 : 120}
            />
            <CardHeader
              title={product.name}
              subheader={
                relativeDate
                  ? dayjs(product.createdAt).fromNow()
                  : dayjs(product.createdAt).format(formatDayMonth)
              }
              titleTypographyProps={{ variant: "subtitle1", fontWeight: 600 }}
              subheaderTypographyProps={{ variant: "caption" }}
              sx={{ pb: 1 }}
            />
            <CardContent sx={{ pt: 0 }}>
              <Typography variant="h5" textAlign="justify">
                $ {intlNumberFormat(product.price, true)}
              </Typography>
              {/* <Stack direction="row" alignItems="center" gap={2} mt={2}> */}
              {/* <Stack
                direction="row"
                alignItems="center"
                gap={1}
                sx={{ color: product.stock <= 5 ? "error.main" : undefined }}
              >
                <InventoryIcon fontSize="small" />
                <Typography variant="caption">
                  {intlNumberFormat(product.stock, true)}
                </Typography>
              </Stack> */}
              {/* <Stack direction='row' alignItems='center' gap={1}>
                <FavoriteIcon fontSize='11' />
                <Typography variant='caption'>{intlNumberFormat(product.likeCounter, true)}</Typography>
              </Stack>
              <Stack direction='row' alignItems='center' gap={1}>
                <ShareIcon fontSize='11' />
                <Typography variant='caption'>{intlNumberFormat(product.shareCounter, true)}</Typography>
              </Stack> */}
              {/* </Stack> */}
            </CardContent>
          </CardActionArea>
        </Card>

        <Dialog
          open={openDialog}
          fullScreen={!upMd}
          fullWidth
          maxWidth="sm"
          onClose={() => setOpenDialog(false)}
        >
          <DialogTitle>
            <Stack direction="row" gap={2} alignItems="center">
              <Stack sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" fontWeight={600}>
                  {product.name}
                </Typography>
                <Typography variant="caption">
                  {relativeDate
                    ? dayjs(product.createdAt).fromNow()
                    : dayjs(product.createdAt).format(formatDayMonth)}
                </Typography>
              </Stack>
              <IconButton onClick={() => setOpenDialog(false)}>
                <CloseIcon />
              </IconButton>
            </Stack>
          </DialogTitle>
          <DialogContent
            sx={{ gap: 2, display: "flex", flexDirection: "column" }}
          >
            <Avatar
              variant="rounded"
              src={product.umage_uri}
              sx={{ width: "100%", height: "auto" }}
            />
            <Typography variant="h5" textAlign="justify">
              $ {intlNumberFormat(product.price, true)}
            </Typography>
            <DialogContentText>{product.description}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<AddShoppingCartIcon />}
            >
              Add To Cart
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AttachMoneyIcon />}
            >
              Buy
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );

  return null;
}
